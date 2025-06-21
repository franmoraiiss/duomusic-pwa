import { Box, Image, Text, Icon } from "@chakra-ui/react"
import { useNavigate } from "react-router";
import { Lock } from "lucide-react";

interface SingleClassProps {
  image: string;
  text: string;
  classPath: string;
  isLocked?: boolean;
  onComplete?: () => void;
}

export const SingleClass = ({ image, text, classPath, isLocked = false, onComplete }: SingleClassProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isLocked) {
      navigate(classPath);
      onComplete?.();
    }
  };

  return (
    <Box 
      backgroundColor="#FFFFFF" 
      width="14rem" 
      minHeight="14rem" 
      borderRadius="2xl" 
      borderColor="#D9D0E3" 
      borderWidth="1px"
      boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)"
      onClick={handleClick}
      cursor={isLocked ? "not-allowed" : "pointer"}
      opacity={isLocked ? 0.5 : 1}
      position="relative"
    >
      <Image borderTopRadius="2xl" src={image} width="14rem" height="9rem" objectFit="cover" />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="5rem" paddingX="2.5rem">
        <Text fontWeight="bold" fontSize="1.2rem">{text}</Text>
      </Box>
      {isLocked && (
        <Box 
          position="absolute" 
          top="50%" 
          left="50%" 
          transform="translate(-50%, -50%)"
          backgroundColor="rgba(0, 0, 0, 0.5)"
          borderRadius="full"
          padding="1rem"
        >
          <Icon color="white" boxSize="2rem">
            <Lock />
          </Icon>
        </Box>
      )}
    </Box>
  );
}
