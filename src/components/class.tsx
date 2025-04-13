import { Box, Image, Text } from "@chakra-ui/react"

interface ClassProps {
  image: string;
  text: string;
}

const Class = ({ image, text }: ClassProps) => {
  return (
    <Box 
      backgroundColor="#FFFFFF" 
      width="14rem" 
      minHeight="14rem" 
      borderRadius="2xl" 
      borderColor="#D9D0E3" 
      borderWidth="1px"
      boxShadow="0px 5px 5px -2px rgba(0, 0, 0, .1)"
    >
      <Image borderTopRadius="2xl" src={image} width="14rem" height="9rem" objectFit="cover" />
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="5rem" paddingX="2.5rem">
        <Text fontWeight="bold" fontSize="1.2rem">{text}</Text>
      </Box>
    </Box>
  );
}

const ClassSeparator = () => {
  return (
    <Box minWidth="0.3rem" minHeight="4rem" backgroundColor="#9586A8" />
  );
}

export { Class, ClassSeparator };
