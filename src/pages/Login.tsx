import { Box, Button, Field, Input, Text, VStack } from "@chakra-ui/react"
import { Collapsible } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

interface FormValues {
  email: string
  password: string
}

const Login = () => {
  const [showEmailLogin, setShowEmailLogin] = useState(false);
  const { login, skipLogin, isLoading, error } = useAuth();
  const navigate = useNavigate();
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => login(data));

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
        <Text color="white" fontWeight="bold" fontSize={40}>DuoMusic</Text>
        
        {/* Main no-login button */}
        <Button 
          backgroundColor="green" 
          width="full"
          height="14"
          fontSize="lg"
          onClick={skipLogin}
        >
          Entrar sem login
        </Button>

        {/* Email login section */}
        <VStack width="full" gap={4}>
          <Button 
            variant="outline" 
            color="white"
            width="full"
            onClick={() => setShowEmailLogin(!showEmailLogin)}
          >
            Entrar com e-mail
          </Button>

          <Collapsible.Root open={showEmailLogin} width="full">
            <Collapsible.Content width="full">
              <form onSubmit={onSubmit} style={{ width: '100%' }}>
                <VStack gap={4} pt={4} width="full">
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
                      Senha <Field.RequiredIndicator />
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

                  {error && (
                    <Text color="red.500" fontSize="sm">
                      {error}
                    </Text>
                  )}

                  <Button 
                    type="submit" 
                    backgroundColor="white" 
                    color="#7203FF" 
                    width="full"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Entrar'}
                  </Button>
                  
                  <Button 
                    variant="ghost" 
                    color="white" 
                    width="full"
                    onClick={() => navigate('/create-account')}
                  >
                    Criar uma conta
                  </Button>
                </VStack>
              </form>
            </Collapsible.Content>
          </Collapsible.Root>
        </VStack>
      </VStack>
    </Box>
  );
};

export { Login }
