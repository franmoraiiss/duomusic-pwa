import { useState } from 'react';
import { useNavigate } from 'react-router';
import { authService } from '../services/auth.service';

interface LoginFormValues {
  email: string;
  password: string;
}

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      setError(null);
      
      const response = await authService.login(data);
      authService.saveAuthData(response);
      
      navigate('/welcome');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during login');
      console.error('Login failed:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const skipLogin = () => {
    navigate('/welcome');
  };

  return {
    login,
    skipLogin,
    isLoading,
    error,
  };
}; 
