import React from 'react';

export default function SharedBoards({ boards = [] }) {
  const filteredBoards = boards.filter(
    ({ name }) => name && name !== 'Anonymous'
  );

  if (!filteredBoards.length) return null;

  return (
    <div className="mt-8 p-4 bg-gray-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Player Boards (Last Updated)</h2>
      <div className="flex flex-wrap gap-4 overflow-x-auto">
        {filteredBoards.map(({ uid, name, selected }, index) => (
          <div
            key={uid || index}
            className="bg-gray-900 p-2 rounded border border-gray-700 w-32 text-center text-sm"
          >
            <div className="mb-2 truncate text-gray-300">{name}</div>
            <div className="grid grid-cols-5 gap-0.5">
              {selected.map((s, i) => (
                <div
                  key={i}
                  className={`w-4 h-4 sm:w-5 sm:h-5 rounded-sm ${
                    s ? 'bg-green-500' : 'bg-gray-700'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
