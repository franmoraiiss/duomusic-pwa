interface ProgressData {
  completedLessons: string[];
}

interface ProgressResponse {
  success: boolean;
  message: string;
}

class ProgressService {
  private getHeaders(): Record<string, string> {
    const token = localStorage.getItem('auth_token');
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    
    return headers;
  }

  private isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  async syncProgress(): Promise<void> {
    if (!this.isLoggedIn()) {
      console.log('User not logged in, skipping progress sync');
      return;
    }

    const completedLessons = localStorage.getItem('completedLessons');
    if (!completedLessons) {
      console.log('No progress to sync');
      return;
    }

    const progressData: ProgressData = {
      completedLessons: JSON.parse(completedLessons)
    };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/lessons/save`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(progressData)
      });

      if (!response.ok) {
        throw new Error('Failed to sync progress');
      }

      const result: ProgressResponse = await response.json();
      console.log('Progress synced successfully:', result.message);
    } catch (error) {
      console.error('Error syncing progress:', error);
      // Don't throw error to avoid breaking the user experience
    }
  }

  async getProgress(): Promise<string[]> {
    if (!this.isLoggedIn()) {
      // For non-logged in users, return local progress
      const completedLessons = localStorage.getItem('completedLessons');
      return completedLessons ? JSON.parse(completedLessons) : [];
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/lessons/completed`, {
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch progress');
      }

      const data: ProgressData = await response.json();
      
      // Update local storage with server data
      localStorage.setItem('completedLessons', JSON.stringify(data.completedLessons));
      
      return data.completedLessons;
    } catch (error) {
      console.error('Error fetching progress:', error);
      // Fallback to local storage
      const completedLessons = localStorage.getItem('completedLessons');
      return completedLessons ? JSON.parse(completedLessons) : [];
    }
  }

  async updateProgress(lessonId: string): Promise<void> {
    // First update local storage
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes(lessonId)) {
      completed.push(lessonId);
      localStorage.setItem('completedLessons', JSON.stringify(completed));
    }

    // Then sync with server if logged in
    await this.syncProgress();
  }
}

export const progressService = new ProgressService(); 
