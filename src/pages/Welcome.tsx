import { Box, Button, HStack, Text, VStack } from "@chakra-ui/react"
import { useNavigate } from "react-router"

const Welcome = () => {
  const navigate = useNavigate();
    
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-end"
      gap={12}
      height="100vh"
      backgroundColor="#7203FF"
    >
      <Box
        backgroundColor="white"
        display="flex"
        flexDirection="column"
        alignItems="center"
        height="50vh"
        width="100vw"
        borderTopRadius="4xl"
        padding={12}
      >
        <VStack gap={24}>
          <HStack>
            <Text fontWeight="bold" fontSize={30} textAlign="center">Bem-vindo ao DuoMusic</Text> 
          </HStack>

          <VStack gap={10}>
            <HStack>
              <Text color="#9586A8" textAlign="center">Aqui você vai aprender teoria musical a partir de instrumentos do seu dia dia</Text> 
            </HStack>

            <HStack>
              <Button backgroundColor="green" width={80} onClick={() => navigate('/study-path')}>Começar</Button>
            </HStack>
          </VStack>
        </VStack>
      </Box>
    </Box>
  )
}

export { Welcome }
