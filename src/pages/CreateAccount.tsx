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
      
      navigate('/');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Falha no cadastro');
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
        <Text color="white" fontWeight="bold" fontSize={40}>Criar Conta</Text>
        
        <form onSubmit={onSubmit} style={{ width: '100%' }}>
          <VStack gap={4} width="full">
            {error && (
              <Text color="red.300" fontSize="sm">
                {error}
              </Text>
            )}

            <Field.Root required width="full">
              <Field.Label color="white">
                Nome <Field.RequiredIndicator />
              </Field.Label>
              <Input 
                variant="subtle" 
                placeholder="Seu nome" 
                width="full"
                {...register("name", { 
                  required: "Nome é obrigatório",
                  minLength: {
                    value: 2,
                    message: "O nome deve ter pelo menos 2 caracteres"
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
                  required: "E-mail é obrigatório",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "E-mail inválido"
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
                  required: "Senha é obrigatória",
                  minLength: {
                    value: 6,
                    message: "A senha deve ter pelo menos 6 caracteres"
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
              {isLoading ? 'Criando conta...' : 'Criar Conta'}
            </Button>
            
            <Button 
              variant="ghost" 
              color="white" 
              width="full"
              onClick={() => navigate('/')}
            >
              Voltar para o login
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};

export { CreateAccount }; 
