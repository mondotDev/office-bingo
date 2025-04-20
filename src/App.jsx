import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, doc, getDocs, getDoc, setDoc, updateDoc, writeBatch, increment } from 'firebase/firestore';
import firebaseApp from './firebase';
import { generateBoard, checkWin } from './utils';
import BingoBoard from './components/BingoBoard';
import Leaderboard from './components/Leaderboard';
import Confetti from 'react-confetti';

function App() {
  const auth = getAuth(firebaseApp);
  const db = getFirestore(firebaseApp);
  const provider = new GoogleAuthProvider();

  const [user, setUser] = useState(null);
  const [terms, setTerms] = useState([]);
  const [board, setBoard] = useState([]);
  const [selected, setSelected] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [winInfo, setWinInfo] = useState(null);

  // Fetch terms on login
  useEffect(() => {
    onAuthStateChanged(auth, async (u) => {
      if (u) {
        setUser(u);
        // Load terms
        const termsSnap = await getDocs(collection(db, 'terms'));
        const allTerms = termsSnap.docs.map(d => d.data().text);
        setTerms(allTerms);

        // Load or create board
        const boardRef = doc(db, 'boards', u.uid);
        const boardSnap = await getDoc(boardRef);
        if (!boardSnap.exists()) {
          const newBoard = generateBoard(allTerms);
          const sel = Array(25).fill(false);
          sel[12] = true;
          await setDoc(boardRef, { terms: newBoard, selected: sel });
          setBoard(newBoard);
          setSelected(sel);
        } else {
          const data = boardSnap.data();
          setBoard(data.terms);
          setSelected(data.selected);
        }

        // Load leaderboard
        const usersSnap = await getDocs(collection(db, 'users'));
        const lb = usersSnap.docs.map(d => ({ id: d.id, ...d.data() }));
        setLeaderboard(lb);
      }
    });
  }, []);

  // Handle cell click
  const handleSelect = async (index) => {
    if (!user) return;
    const newSel = [...selected];
    newSel[index] = !newSel[index];
    setSelected(newSel);
    await updateDoc(doc(db, 'boards', user.uid), { selected: newSel });

    if (checkWin(newSel)) {
      const winnerName = user.displayName || 'Anonymous';
      const userRef = doc(db, 'users', user.uid);
      const now = Date.now();
      await updateDoc(userRef, {
        weeklyWins: increment(1),
        allTimeWins: increment(1),
        lastWin: now
      });

      setWinInfo({ name: winnerName });
      // Confetti and new round
      setTimeout(async () => {
        const batch = writeBatch(db);
        const boardDocs = await getDocs(collection(db, 'boards'));
        boardDocs.docs.forEach(d => {
          const newBoard = generateBoard(terms);
          const newSel = Array(25).fill(false);
          newSel[12] = true;
          batch.update(doc(db, 'boards', d.id), { terms: newBoard, selected: newSel });
        });
        await batch.commit();
        // Reload current board
        const curSnap = await getDoc(doc(db, 'boards', user.uid));
        const curData = curSnap.data();
        setBoard(curData.terms);
        setSelected(curData.selected);
        setWinInfo(null);
      }, 4000);
    }
  };

  return (
    <div className="flex h-screen">
      <Leaderboard data={leaderboard} />
      <div className="flex-1 p-4">
        {!user ? (
          <button onClick={() => signInWithPopup(auth, provider)} className="bg-blue-500 px-4 py-2 rounded">
            Sign in with Google
          </button>
        ) : (
          <>
            {winInfo && (
              <div className="fixed top-0 w-full bg-green-600 text-white text-center py-2">
                🎉 {winInfo.name} got a BINGO! New round starting...
              </div>
            )}
            <BingoBoard board={board} selected={selected} onSelect={handleSelect} />
            <Confetti recycle={!!winInfo} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
