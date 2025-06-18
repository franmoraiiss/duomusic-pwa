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
    } catch (error) {
      console.error('Failed to fetch current streak:', error);
    }
  };

  const updateStreak = async () => {
    try {
      await streakService.updateStreak();
      // After updating streak, fetch current streak and top users
      await fetchCurrentStreak();
      await fetchTopUsers();
    } catch (error) {
      console.error('Failed to update streak:', error);
    }
  };

  const fetchTopUsers = async () => {
    try {
      const users = await streakService.getTopUsers();
      setTopUsers(users);
    } catch (error) {
      console.error('Failed to fetch top users:', error);
    }
  };

  // Fetch current streak and top users when component mounts
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
