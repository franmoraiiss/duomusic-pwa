import { useState, useEffect } from 'react';
import { streakService } from '../services/streak.service';

interface TopUser {
  id: number;
  name: string;
  currentStreak: number;
}

export const useStreak = () => {
  const [streak, setStreak] = useState<number>(0);
  const [topUsers, setTopUsers] = useState<TopUser[]>([]);

  const fetchCurrentStreak = async () => {
    try {
      const currentStreak = await streakService.getCurrentStreak();
      setStreak(currentStreak);
    } catch {
      // Ignore fetch errors
    }
  };

  const updateStreak = async () => {
    try {
      await streakService.updateStreak();
      await fetchCurrentStreak();
      await fetchTopUsers();
    } catch {
      // Ignore update errors
    }
  };

  const fetchTopUsers = async () => {
    try {
      const users = await streakService.getTopUsers();
      setTopUsers(users);
    } catch {
      // Ignore fetch errors
    }
  };

  useEffect(() => {
    fetchCurrentStreak();
    fetchTopUsers();
  }, []);

  return {
    streak,
    topUsers,
    updateStreak
  };
}; 
