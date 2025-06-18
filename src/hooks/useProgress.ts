import { useState, useEffect } from 'react';
import { progressService } from '../services/progress.service';

export const useProgress = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadProgress = async () => {
    try {
      setIsLoading(true);
      const progress = await progressService.getProgress();
      setCompletedLessons(progress);
    } catch (error) {
      console.error('Failed to load progress:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const markLessonCompleted = async (lessonId: string) => {
    try {
      await progressService.updateProgress(lessonId);
      setCompletedLessons(prev => {
        if (!prev.includes(lessonId)) {
          return [...prev, lessonId];
        }
        return prev;
      });
    } catch (error) {
      console.error('Failed to mark lesson as completed:', error);
    }
  };

  const syncProgress = async () => {
    try {
      await progressService.syncProgress();
    } catch (error) {
      console.error('Failed to sync progress:', error);
    }
  };

  // Load progress when component mounts
  useEffect(() => {
    loadProgress();
  }, []);

  return {
    completedLessons,
    isLoading,
    markLessonCompleted,
    syncProgress,
    loadProgress
  };
}; 
