interface LoginData {
  email: string;
  password: string;
}

interface AuthResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

export const authService = {
  async login(data: LoginData): Promise<AuthResponse> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Login failed');
    }

    return response.json();
  },

  saveAuthData(data: AuthResponse) {
    localStorage.setItem('auth_token', data.token);
    localStorage.setItem('user_name', data.user.name);
    localStorage.setItem('user_email', data.user.email);
  },
}; 
