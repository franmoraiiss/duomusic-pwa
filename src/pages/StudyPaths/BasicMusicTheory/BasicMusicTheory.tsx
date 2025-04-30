import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const BasicMusicTheory = () => {
  const navigate = useNavigate();

  return (
    <Box 
      backgroundColor="#F6F5F5"
      height="100vh"
    >
      <Box
        position="fixed"
        top="0"
        zIndex="1000"
      >
        <Icon margin="1rem" onClick={() => navigate(-1)}>
          <ChevronLeft />
        </Icon>
      </Box>
      <Box paddingY="4rem" width="100%" boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)">
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Teoria musical básica</Text>
      </Box>
      <Box marginTop="3rem">
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => navigate('/basic-music-theory/01')}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 1: Introdução</Text>
        </Box>
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => navigate('/basic-music-theory/02')}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 2: Ritmo</Text>
        </Box>
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => navigate('/basic-music-theory/03')}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 3: Intensidade</Text>
        </Box>
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => navigate('/basic-music-theory/04')}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 4: Timbre</Text>
        </Box>
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => navigate('/basic-music-theory/test')}
        >
          <Text color="#2D0C57" fontWeight="bold">Exercícios</Text>
        </Box>
      </Box>
    </Box>
  )
}

export { BasicMusicTheory }
