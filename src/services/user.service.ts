interface CreateAccountData {
  name: string;
  email: string;
  password: string;
}

interface CreateAccountResponse {
  success: boolean;
  message: string;
}

export const userService = {
  async createAccount(data: CreateAccountData): Promise<CreateAccountResponse> {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Falha no cadastro');
    }

    return response.json();
  },
}; 
