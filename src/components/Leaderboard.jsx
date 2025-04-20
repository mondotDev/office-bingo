import React from 'react';
import { useWindowSize } from '@react-hook/window-size';

const Leaderboard = ({ data }) => {
  const [width] = useWindowSize();
  return (
    <div className="w-64 bg-gray-900 p-4 overflow-auto">
      <h2 className="text-xl mb-4">Leaderboard</h2>
      {data.map(user => (
        <div key={user.id} className="mb-2">
          <span title={`All-time wins: ${user.allTimeWins || 0}`}>
            {user.name || 'Anonymous'} - Weekly: {user.weeklyWins || 0}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
