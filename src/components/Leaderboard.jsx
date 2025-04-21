import React from 'react';
import { getStartOfThisWeek } from '../utils/time';

export default function Leaderboard({ data }) {
  const startOfWeek = getStartOfThisWeek();

  return (
    <div className="w-full md:w-64 bg-gray-800 p-4 text-white flex-shrink-0">
      <h2 className="text-xl font-bold mb-2 text-center md:text-left">Leaderboard</h2>
      <ul className="space-y-1 text-sm sm:text-base">
        {data.map((user) => {
          const weekly = user.lastWin >= startOfWeek ? user.weeklyWins : 0;
          return (
            <li key={user.id}>
              {user.name || "Anonymous"} – Weekly: {weekly}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
