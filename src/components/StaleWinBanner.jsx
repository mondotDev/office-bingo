import React from 'react';

export default function StaleWinBanner({ onReset }) {
  return (
    <div className="fixed top-0 w-full bg-yellow-600 text-center py-3 z-20 text-sm sm:text-base">
      🟡 You already got a BINGO in this round. Want to reset your board and play again?
      <button
        onClick={onReset}
        className="ml-4 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
      >
        Reset my board
      </button>
    </div>
  );
}
