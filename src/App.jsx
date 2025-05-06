import React, { useEffect, useState, useRef } from 'react';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  onSnapshot,
  increment
} from 'firebase/firestore';
import firebaseApp from './firebase';
import { generateBoard, checkWin } from './utils';
import BingoBoard from './components/BingoBoard';
import Leaderboard from './components/Leaderboard';
import Confetti from 'react-confetti';
import SettingsMenu from './components/SettingsMenu';
import SharedBoards from './components/SharedBoards';
import StaleWinBanner from './components/StaleWinBanner';

export default function App() {
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [terms, setTerms] = useState([]);
  const [board, setBoard] = useState([]);
  const [selected, setSelected] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [roundInfo, setRoundInfo] = useState(null);
  const [allBoards, setAllBoards] = useState([]);

  const fetchUsersMap = async () => {
    const usersSnap = await getDocs(collection(db, 'users'));
    const userMap = {};
    usersSnap.forEach((doc) => {
      userMap[doc.id] = doc.data().name || 'Anonymous';
    });
    return userMap;
  };

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        setUser(null);
        setBoard([]);
        setSelected([]);
        return;
      }
      setUser(u);

      await setDoc(
        doc(db, 'users', u.uid),
        { name: u.displayName },
        { merge: true }
      );

      const termsSnap = await getDocs(collection(db, 'terms'));
      const allTerms = termsSnap.docs.map((d) => d.data().text);
      setTerms(allTerms);

      const boardRef = doc(db, 'boards', u.uid);
      const boardSnap = await getDoc(boardRef);
      if (!boardSnap.exists()) {
        const newBoard = generateBoard(allTerms);
        const sel0 = Array(25).fill(false);
        sel0[12] = true;
        await setDoc(boardRef, { terms: newBoard, selected: sel0 });
        setBoard(newBoard);
        setSelected(sel0);
      } else {
        const data = boardSnap.data();
        setBoard(data.terms);
        setSelected(data.selected);
      }

      const usersSnap = await getDocs(collection(db, 'users'));
      setLeaderboard(usersSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });

    return unsubscribeAuth;
  }, [auth, db]);

  useEffect(() => {
    const roundRef = doc(db, 'round', 'current');

    const unsubscribe = onSnapshot(roundRef, async (snap) => {
      if (!snap.exists()) return;

      const { winnerName, timestamp } = snap.data();
      const storedRoundId = localStorage.getItem('roundId');

      if (storedRoundId !== String(timestamp)) {
        localStorage.setItem('roundId', String(timestamp));
        setRoundInfo({ winnerName, timestamp });

        if (user && terms.length > 0) {
          const boardRef = doc(db, 'boards', user.uid);
          const newBoard = generateBoard(terms);
          const sel0 = Array(25).fill(false);
          sel0[12] = true;
          await setDoc(boardRef, { terms: newBoard, selected: sel0 }, { merge: true });
          setBoard(newBoard);
          setSelected(sel0);
        }
      } else {
        setRoundInfo({ winnerName, timestamp });
      }
    });

    return unsubscribe;
  }, [db, user, terms]);

  useEffect(() => {
    const unsubscribeBoards = onSnapshot(collection(db, 'boards'), async () => {
      const [boardsSnap, userMap] = await Promise.all([
        getDocs(collection(db, 'boards')),
        fetchUsersMap()
      ]);

      const boardsData = boardsSnap.docs.map((doc) => {
        const data = doc.data();
        return {
          uid: doc.id,
          name: userMap[doc.id] || 'Anonymous',
          selected: data.selected || []
        };
      });

      setAllBoards(boardsData);
    });

    return unsubscribeBoards;
  }, [db]);

  useEffect(() => {
    const maxAge = 1000 * 60 * 60 * 12; // 12 hours
    const storedRoundId = localStorage.getItem('roundId');
    const lastUpdated = parseInt(storedRoundId);

    if (storedRoundId && (!lastUpdated || Date.now() - lastUpdated > maxAge)) {
      localStorage.removeItem('roundId');
      console.log('Old roundId cleared from localStorage');
    }
  }, []);

  const handleSelect = async (idx) => {
    if (!user || board[idx] === 'FREE') return;

    const newSel = [...selected];
    newSel[idx] = !newSel[idx];
    setSelected(newSel);

    await setDoc(
      doc(db, 'boards', user.uid),
      { selected: newSel },
      { merge: true }
    );

    if (checkWin(newSel)) {
      const now = Date.now();
      const userRef = doc(db, 'users', user.uid);

      await setDoc(
        userRef,
        {
          name: user.displayName,
          weeklyWins: increment(1),
          allTimeWins: increment(1),
          lastWin: now
        },
        { merge: true }
      );

      await setDoc(doc(db, 'round', 'current'), {
        winnerName: user.displayName || 'Anonymous',
        timestamp: now
      });

      const usersSnap = await getDocs(collection(db, 'users'));
      setLeaderboard(usersSnap.docs.map((d) => ({ id: d.id, ...d.data() })));
    }
  };

  const resetMyBoard = async () => {
    const newBoard = generateBoard(terms);
    const sel0 = Array(25).fill(false);
    sel0[12] = true;
    await setDoc(
      doc(db, 'boards', user.uid),
      { terms: newBoard, selected: sel0 },
      { merge: true }
    );
    setBoard(newBoard);
    setSelected(sel0);
    setRoundInfo(null);
  };

  const shouldShowStaleBanner = !roundInfo &&
    checkWin(selected) &&
    localStorage.getItem('roundId');

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-white overflow-hidden">
      {user && <SettingsMenu user={user} />}
      <Leaderboard data={leaderboard} />

      <div className="flex-1 p-4 overflow-y-auto">
        {!user ? (
          <div className="flex justify-center items-center h-full">
            <button
              onClick={() => signInWithPopup(auth, provider)}
              className="bg-blue-500 px-6 py-3 text-lg rounded w-full sm:w-auto"
            >
              Sign in with Google
            </button>
          </div>
        ) : (
          <>
            {roundInfo ? (
              <div className="fixed top-0 w-full bg-green-600 text-center py-3 z-20 text-sm sm:text-base">
                🎉 {roundInfo.winnerName} got a BINGO!
                <button
                  onClick={resetMyBoard}
                  className="ml-4 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
                >
                  Reset my board
                </button>
              </div>
            ) : (
              shouldShowStaleBanner && <StaleWinBanner onReset={resetMyBoard} />
            )}

            <div className="mt-12">
              <BingoBoard
                board={board}
                selected={selected}
                onSelect={handleSelect}
              />
              {roundInfo && <Confetti recycle={false} />}
              <SharedBoards boards={allBoards} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
