import { Box, Button, Field, HStack, Input, Text, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

interface FormValues {
  email: string
  password: string
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => login(data))

  const login = (data: FormValues) => {
    console.log(data)
    navigate('/welcome')
  }

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
      <form onSubmit={onSubmit}>
        <VStack gap={8}>
          <Text color="white" fontWeight="bold" fontSize={40}>DuoMusic</Text>
            <HStack width="80">
              <Field.Root required>
                <Field.Label color="white">
                  E-mail <Field.RequiredIndicator />
                </Field.Label>
                <Input variant="subtle" placeholder="email@email.com" {...register("email")} />
                <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
              </Field.Root>
            </HStack>
            <HStack width="80">
            <Field.Root required>
                <Field.Label color="white">
                  Senha <Field.RequiredIndicator />
                </Field.Label>
                <Input variant="subtle" placeholder="******" type="password" {...register("password")} />
                <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
              </Field.Root>
            </HStack>
            <HStack>
              <Button type="submit" backgroundColor="green" width={80}>Entrar</Button>
            </HStack>

            <HStack marginTop={20}>
              <Button variant="ghost" color="white">Entrar sem login</Button>
            </HStack>
          </VStack>
        </form>
      </Box>
  )
}

export { Login }
