import { Box, Icon, Text, SimpleGrid, Button } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const AIExercise = () => {
  const navigate = useNavigate();

  const topics = [
    { id: 'scales', name: 'Escalas Musicais' },
    { id: 'chords', name: 'Acordes' },
    { id: 'rhythm', name: 'Ritmo e Tempo' },
    { id: 'intervals', name: 'Intervalos' },
    { id: 'notes', name: 'Notas Musicais' },
    { id: 'clefs', name: 'Claves' },
    { id: 'time-signatures', name: 'Compassos' },
    { id: 'dynamics', name: 'Dinâmica Musical' }
  ];

  const handleTopicSelect = (topicId: string) => {
    navigate(`/ai-exercise/test/${topicId}`);
  };

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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Exercite com IA</Text>
        <Text fontSize="1rem" color="#2D0C57" textAlign="center" marginTop="1rem">
          Escolha um tópico para praticar com questões geradas por IA
        </Text>
      </Box>

      <Box padding="2rem">
        <SimpleGrid columns={2} gap={4}>
          {topics.map((topic) => (
            <Button
              key={topic.id}
              height="100px"
              onClick={() => handleTopicSelect(topic.id)}
              backgroundColor="white"
              color="#2D0C57"
              _hover={{ backgroundColor: "#F0E6FF" }}
              boxShadow="0px 2px 4px rgba(0, 0, 0, 0.1)"
            >
              {topic.name}
            </Button>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export { AIExercise }; 
