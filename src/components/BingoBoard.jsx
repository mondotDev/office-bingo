import React from 'react';

const BingoBoard = ({ board, selected, onSelect }) => {
  return (
    <div className="grid grid-cols-5 gap-1 max-w-lg mx-auto">
      {board.map((term, idx) => (
        <div
          key={idx}
          onClick={() => term !== 'FREE' && onSelect(idx)}
          className={`h-24 flex items-center justify-center p-2 border-2 ${selected[idx] ? 'bg-blue-600' : 'bg-gray-800'} cursor-pointer`}
        >
          <span className="text-center text-sm">{term}</span>
        </div>
      ))}
    </div>
  );
};

export default BingoBoard;
