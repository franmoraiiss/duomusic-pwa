interface TopUser {
  id: number;
  name: string;
  currentStreak: number;
}

interface StreakResponse {
  currentStreak: number;
}

class StreakService {
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

  async updateStreak(): Promise<void> {
    if (this.isLoggedIn()) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/streak/update`, {
        method: 'POST',
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to update streak');
      }
    } else {
      const currentStreak = parseInt(localStorage.getItem('userStreak') || '0');
      const lastUpdate = localStorage.getItem('lastStreakUpdate');
      const today = new Date().toDateString();

      if (lastUpdate !== today) {
        localStorage.setItem('userStreak', (currentStreak + 1).toString());
        localStorage.setItem('lastStreakUpdate', today);
      }
    }
  }

  async getTopUsers(): Promise<TopUser[]> {
    if (this.isLoggedIn()) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/streak/top`, {
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch top users');
      }

      return response.json();
    } else {
      const currentStreak = parseInt(localStorage.getItem('userStreak') || '0');
      return [{
        id: 0,
        name: localStorage.getItem('user_name') || 'Você',
        currentStreak: currentStreak
      }];
    }
  }

  async getCurrentStreak(): Promise<number> {
    if (this.isLoggedIn()) {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/streak/current`, {
        headers: this.getHeaders(),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch current streak');
      }

      const data: StreakResponse = await response.json();
      return data.currentStreak;
    } else {
      return parseInt(localStorage.getItem('userStreak') || '0');
    }
  }
}

export const streakService = new StreakService(); 
