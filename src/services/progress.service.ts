interface ProgressData {
  completedLessons: string[];
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
      return;
    }

    const completedLessons = localStorage.getItem('completedLessons');
    if (!completedLessons) {
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

      await response.json();
    } catch {
      // Ignore sync errors
    }
  }

  async getProgress(): Promise<string[]> {
    if (!this.isLoggedIn()) {
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
      
      localStorage.setItem('completedLessons', JSON.stringify(data.completedLessons));
      
      return data.completedLessons;
    } catch {
      const completedLessons = localStorage.getItem('completedLessons');
      return completedLessons ? JSON.parse(completedLessons) : [];
    }
  }

  async updateProgress(lessonId: string): Promise<void> {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes(lessonId)) {
      completed.push(lessonId);
      localStorage.setItem('completedLessons', JSON.stringify(completed));
    }

    await this.syncProgress();
  }
}

export const progressService = new ProgressService(); 
