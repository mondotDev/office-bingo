import React from 'react';
import { getStartOfThisWeek } from '../utils/time';

export default function Leaderboard({ data }) {
  const startOfWeek = getStartOfThisWeek();

  const weeklyLeaders = [...data]
    .map((user) => ({
      ...user,
      weekly: user.lastWin >= startOfWeek ? user.weeklyWins || 0 : 0
    }))
    .filter((user) => user.weekly > 0)
    .sort((a, b) => b.weekly - a.weekly);

  const allTimeLeaders = [...data]
    .map((user) => ({
      ...user,
      allTime: user.allTimeWins || 0
    }))
    .filter((user) => user.allTime > 0)
    .sort((a, b) => b.allTime - a.allTime);

  return (
    <div className="w-full md:w-64 bg-gray-800 p-4 text-white flex-shrink-0">
      <h2 className="text-xl font-bold mb-4 text-center md:text-left">Leaderboard</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">This Week</h3>
        <ul className="space-y-1 text-sm sm:text-base">
          {weeklyLeaders.map((user) => (
            <li key={user.id}>
              {user.name || "Anonymous"} – {user.weekly}
            </li>
          ))}
          {weeklyLeaders.length === 0 && <li className="text-gray-400">No wins yet this week</li>}
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">All-Time</h3>
        <ul className="space-y-1 text-sm sm:text-base">
          {allTimeLeaders.map((user) => (
            <li key={user.id}>
              {user.name || "Anonymous"} – {user.allTime}
            </li>
          ))}
          {allTimeLeaders.length === 0 && <li className="text-gray-400">No wins recorded</li>}
        </ul>
      </div>
    </div>
  );
}
