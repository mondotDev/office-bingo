import React from 'react';

export default function StaleWinBanner({ onReset }) {
  return (
    <div className="fixed top-0 w-full bg-yellow-600 text-center py-3 z-20 text-sm sm:text-base">
      ⚠️ It looks like you had a winning board from a previous round.
      Want to start fresh and join the current game?
      <button
        onClick={onReset}
        className="ml-4 px-3 py-1 bg-gray-800 rounded hover:bg-gray-700"
      >
        Reset my board
      </button>
    </div>
  );
}
