// src/utils/time.js

export function getStartOfThisWeek() {
    const now = new Date();
    const day = now.getDay(); // Sunday = 0
    const diff = now.getDate() - day;
    const sunday = new Date(now.setDate(diff));
    sunday.setHours(0, 0, 0, 0);
    return sunday.getTime();
  }
  