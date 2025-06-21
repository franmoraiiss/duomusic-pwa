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
    } catch {
      // Ignore load errors
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
    } catch {
      // Ignore update errors
    }
  };

  const syncProgress = async () => {
    try {
      await progressService.syncProgress();
    } catch {
      // Ignore sync errors
    }
  };

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
