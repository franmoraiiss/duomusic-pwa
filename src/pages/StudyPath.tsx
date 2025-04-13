import { Box, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router"

const StudyPath = () => {
  const navigate = useNavigate();
    
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      height="100vh"
      backgroundColor="#F6F5F5"
    >
      <Box paddingTop="4rem" paddingBottom="2rem" width="100%">
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Trilha de estudo</Text>
      </Box>
      <Box 
        height="100%"
        width="100%"
        overflow="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding="3rem"
      >        
        <Box 
          backgroundColor="#FFFFFF" 
          width="14rem" 
          minHeight="14rem" 
          borderRadius="2xl" 
          borderColor="#D9D0E3" 
          borderWidth="1px"
          boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)"
        >
          <Box>Imagem</Box>
          <Box>Trilha</Box>
        </Box>
        <Box minWidth="0.3rem" minHeight="4rem" backgroundColor="#9586A8" />
        <Box 
          backgroundColor="#FFFFFF" 
          width="14rem" 
          minHeight="14rem" 
          borderRadius="2xl" 
          borderColor="#D9D0E3" 
          borderWidth="1px"
          boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)"
        >
          <Box>Imagem</Box>
          <Box>Trilha</Box>
        </Box>
        <Box minWidth="0.3rem" minHeight="4rem" backgroundColor="#9586A8" />
        <Box 
          backgroundColor="#FFFFFF" 
          width="14rem" 
          minHeight="14rem" 
          borderRadius="2xl" 
          borderColor="#D9D0E3" 
          borderWidth="1px"
          boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)"
        >
          <Box>Imagem</Box>
          <Box>Trilha</Box>
        </Box>
        <Box minWidth="0.3rem" minHeight="4rem" backgroundColor="#9586A8" />
        <Box 
          backgroundColor="#FFFFFF" 
          width="14rem" 
          minHeight="14rem" 
          borderRadius="2xl" 
          borderColor="#D9D0E3" 
          borderWidth="1px"
          boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)"
        >
          <Box>Imagem</Box>
          <Box>Trilha</Box>
        </Box>
        <Box minWidth="0.3rem" minHeight="4rem" backgroundColor="#9586A8" />
        <Box 
          backgroundColor="#FFFFFF" 
          width="14rem" 
          minHeight="14rem" 
          borderRadius="2xl" 
          borderColor="#D9D0E3" 
          borderWidth="1px"
          boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)"
        >
          <Box>Imagem</Box>
          <Box>Trilha</Box>
        </Box>
      </Box>
      <Box 
        backgroundColor="#FFFFFF" 
        display="flex" 
        flexDirection="row" 
        alignItems="center" 
        justifyContent="space-around" 
        width="100%" 
        height="6rem"
        borderColor="#D9D0E3"
        borderWidth="1px"
        boxShadow="0px 5px 15px 5px rgba(0, 0, 0, .2)"
      >
        <Text onClick={() => navigate("/")}>Path</Text>
        <Text>Profile</Text>
      </Box>
    </Box>
  )
}

export { StudyPath }
