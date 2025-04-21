// src/App.jsx
import React, { useEffect, useState } from 'react';
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

export default function App() {
  const auth = getAuth(firebaseApp);
  const db   = getFirestore(firebaseApp);
  const provider = new GoogleAuthProvider();

  const [user,        setUser]        = useState(null);
  const [terms,       setTerms]       = useState([]);
  const [board,       setBoard]       = useState([]);
  const [selected,    setSelected]    = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [roundInfo,   setRoundInfo]   = useState(null);

  // 1) Authenticate & load initial data
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (u) => {
      if (!u) return;
      setUser(u);

      // Load bingo terms
      const termsSnap = await getDocs(collection(db, 'terms'));
      const allTerms  = termsSnap.docs.map(d => d.data().text);
      setTerms(allTerms);

      // Load or create this user's board
      const boardRef  = doc(db, 'boards', u.uid);
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

      // Load leaderboard
      const usersSnap = await getDocs(collection(db, 'users'));
      setLeaderboard(usersSnap.docs.map(d => ({ id: d.id, ...d.data() })));
    });

    return unsubscribe;
  }, [auth, db]);

  // 2) Listen for round broadcasts, but ignore the initial snapshot
  useEffect(() => {
    const roundRef = doc(db, 'round', 'current');
    let first = true;

    const unsubscribe = onSnapshot(roundRef, snap => {
      if (first) {
        first = false;
        return; // skip the initial load
      }
      if (snap.exists()) {
        const { winnerName, timestamp } = snap.data();
        setRoundInfo({ winnerName, timestamp });
      }
    });

    return unsubscribe;
  }, [db]);

  // 3) Handle user selecting a square
  const handleSelect = async (idx) => {
    if (!user || board[idx] === 'FREE') return;

    // Toggle and persist selection
    const newSel = [...selected];
    newSel[idx] = !newSel[idx];
    setSelected(newSel);
    await setDoc(
      doc(db, 'boards', user.uid),
      { selected: newSel },
      { merge: true }
    );

    // Check for bingo
    if (checkWin(newSel)) {
      const winnerName = user.displayName || 'Anonymous';
      const now = Date.now();

      // Record the win counts
      const userRef = doc(db, 'users', user.uid);
      await setDoc(
        userRef,
        {
          weeklyWins: increment(1),
          allTimeWins: increment(1),
          lastWin: now
        },
        { merge: true }
      );

      // Broadcast the new round
      const roundRef = doc(db, 'round', 'current');
      await setDoc(roundRef, { winnerName, timestamp: now });

      // Refresh leaderboard
      const usersSnap = await getDocs(collection(db, 'users'));
      setLeaderboard(usersSnap.docs.map(d => ({ id: d.id, ...d.data() })));
    }
  };

  // 4) Reset only this user's board when they click the banner button
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

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Leaderboard data={leaderboard} />

      <div className="flex-1 p-4">
        {!user ? (
          <button
            onClick={() => signInWithPopup(auth, provider)}
            className="bg-blue-500 px-4 py-2 rounded"
          >
            Sign in with Google
          </button>
        ) : (
          <>
            {roundInfo && (
              <div className="fixed top-0 w-full bg-green-600 text-center py-3 z-10">
                🎉 {roundInfo.winnerName} got a BINGO!
                <button
                  onClick={resetMyBoard}
                  className="ml-4 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
                >
                  Reset my board
                </button>
              </div>
            )}

            <BingoBoard
              board={board}
              selected={selected}
              onSelect={handleSelect}
            />

            {roundInfo && <Confetti recycle={false} />}
          </>
        )}
      </div>
    </div>
  );
}
