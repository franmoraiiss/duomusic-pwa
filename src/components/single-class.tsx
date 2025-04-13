import { Box, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router";

interface SingleClassProps {
  image: string;
  text: string;
  classPath: string;
}

export const SingleClass = ({ image, text, classPath }: SingleClassProps) => {
  const navigate = useNavigate();

  return (
    <Box 
      backgroundColor="#FFFFFF" 
      width="14rem" 
      minHeight="14rem" 
      borderRadius="2xl" 
      borderColor="#D9D0E3" 
      borderWidth="1px"
      boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)"
      onClick={() => navigate(classPath)}
    >
      <Image borderTopRadius="2xl" src={image} width="14rem" height="9rem" objectFit="cover" />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="5rem" paddingX="2.5rem">
        <Text fontWeight="bold" fontSize="1.2rem">{text}</Text>
      </Box>
    </Box>
  );
}
