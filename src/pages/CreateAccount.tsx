import { Box, Button, Field, Input, Text, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useState } from "react";
import { userService } from "@/services/user.service";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const CreateAccount = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => createAccount(data));

  const createAccount = async (data: FormValues) => {
    try {
      setIsLoading(true);
      setError(null);
      
      await userService.createAccount(data);
      console.log('Account created successfully');
      
      // Redirect to login page
      navigate('/');
    } catch (error) {
      console.error('Registration failed:', error);
      setError(error instanceof Error ? error.message : 'Registration failed');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      gap={12}
      py={12}
      height="100vh"
      backgroundColor="#7203FF"
    >
      <VStack gap={8} width="100%" maxWidth="320px">
        <Text color="white" fontWeight="bold" fontSize={40}>Create Account</Text>
        
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
          <VStack gap={4} width="full">
            {error && (
              <Text color="red.300" fontSize="sm">
                {error}
              </Text>
            )}

            <Field.Root required width="full">
              <Field.Label color="white">
                Name <Field.RequiredIndicator />
              </Field.Label>
              <Input 
                variant="subtle" 
                placeholder="Your name" 
                width="full"
                {...register("name", { 
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters"
                  }
                })} 
              />
              <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root required width="full">
              <Field.Label color="white">
                E-mail <Field.RequiredIndicator />
              </Field.Label>
              <Input 
                variant="subtle" 
                placeholder="email@email.com" 
                width="full"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })} 
              />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root required width="full">
              <Field.Label color="white">
                Password <Field.RequiredIndicator />
              </Field.Label>
              <Input 
                variant="subtle" 
                placeholder="******" 
                type="password" 
                width="full"
                {...register("password", { 
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters"
                  }
                })} 
              />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
            </Field.Root>

            <Button 
              type="submit" 
              backgroundColor="white" 
              color="#7203FF" 
              width="full"
              disabled={isLoading}
            >
              {isLoading ? 'Creating Account...' : 'Create Account'}
            </Button>
            
            <Button 
              variant="ghost" 
              color="white" 
              width="full"
              onClick={() => navigate('/')}
            >
              Back to Login
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export { CreateAccount }; 
