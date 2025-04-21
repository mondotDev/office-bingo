import React from 'react';
import classNames from 'classnames';

export default function BingoBoard({ board, selected, onSelect }) {
  return (
    <div className="grid grid-cols-5 gap-1 sm:gap-2 max-w-[95vw] sm:max-w-[500px] mx-auto">
      {board.map((term, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={classNames(
            "aspect-square flex items-center justify-center rounded text-center font-semibold p-1",
            "transition duration-200 ease-in-out",
            selected[idx]
              ? "bg-green-500 text-black"
              : "bg-gray-700 hover:bg-gray-600 text-white",
            "text-xs sm:text-sm md:text-base"
          )}
        >
          {term}
        </button>
      ))}
    </div>
  );
}
