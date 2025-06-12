import { useState, useEffect } from 'react';

interface StreakData {
  count: number;
  lastActivityDate: string;
}

export const useStreak = () => {
  const [streak, setStreak] = useState<number>(0);

  const loadStreak = (): StreakData => {
    const storedStreak = localStorage.getItem('userStreak');
    if (!storedStreak) {
      return { count: 0, lastActivityDate: new Date().toISOString() };
    }
    return JSON.parse(storedStreak);
  };

  const saveStreak = (data: StreakData) => {
    localStorage.setItem('userStreak', JSON.stringify(data));
  };

  const checkAndUpdateStreak = () => {
    const streakData = loadStreak();
    const lastActivity = new Date(streakData.lastActivityDate);
    const now = new Date();
    const diffInHours = (now.getTime() - lastActivity.getTime()) / (1000 * 60 * 60);

    if (diffInHours > 48) {
      // If more than 48 hours have passed, reset streak
      const newData = { count: 0, lastActivityDate: now.toISOString() };
      saveStreak(newData);
      setStreak(0);
    } else if (diffInHours > 24) {
      // If between 24-48 hours, user needs to complete something today to maintain streak
      const today = new Date().toDateString();
      const lastActivityDay = lastActivity.toDateString();
      
      if (today === lastActivityDay) {
        // If they've already done something today, maintain streak
        setStreak(streakData.count);
      } else {
        // They haven't done anything today yet, show previous streak but don't update localStorage
        setStreak(streakData.count);
      }
    } else {
      // Within 24 hours, maintain streak
      setStreak(streakData.count);
    }
  };

  const incrementStreak = () => {
    const streakData = loadStreak();
    const lastActivity = new Date(streakData.lastActivityDate);
    const now = new Date();
    const today = now.toDateString();
    const lastActivityDay = lastActivity.toDateString();

    if (today !== lastActivityDay) {
      // Only increment if it's a new day
      const newData = {
        count: streakData.count + 1,
        lastActivityDate: now.toISOString()
      };
      saveStreak(newData);
      setStreak(newData.count);
    } else {
      // Update last activity time without incrementing streak
      const newData = {
        count: streakData.count,
        lastActivityDate: now.toISOString()
      };
      saveStreak(newData);
      setStreak(newData.count);
    }
  };

  // Check streak when component mounts
  useEffect(() => {
    checkAndUpdateStreak();
  }, []);

  return {
    streak,
    incrementStreak,
    checkAndUpdateStreak
  };
}; 
