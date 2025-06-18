import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const R1 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('r1');
    navigate(-1);
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 01: Conceitos Básicos de Ritmo</Text>
      </Box>
      <Progress.Root value={(100*page)/totalPages} size="xs" colorPalette="green">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>

      <Box>
        {page === 1 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que é Ritmo?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Ritmo é a organização do som no tempo. É o elemento da música que lida com:
                <br/><br/>
                • Duração das notas
                <br/>
                • Acentuação
                <br/>
                • Padrões de repetição
                <br/>
                • Pulso e batidas
                <br/><br/>
                O ritmo é o que nos faz querer dançar e bater o pé ao ouvir música!
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={() => setPage(page + 1)}>Continuar</Button>
            </Box>
          </Box>
        )}

        {page === 2 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Pulso Musical</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                O pulso é a batida regular e constante da música, como o tique-taque de um relógio.
                <br/><br/>
                • É a unidade básica do tempo musical
                <br/>
                • Mantém a música organizada
                <br/>
                • Pode ser rápido ou lento (andamento)
                <br/>
                • Nos ajuda a contar o tempo: "1, 2, 3, 4..."
                <br/><br/>
                Tente bater palmas em um ritmo constante - isso é o pulso!
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={() => setPage(page + 1)}>Continuar</Button>
            </Box>
          </Box>
        )}

        {page === 3 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Andamento</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                O andamento é a velocidade do pulso musical:
                <br/><br/>
                • Lento (Largo, Adagio)
                <br/>
                • Moderado (Andante, Moderato)
                <br/>
                • Rápido (Allegro, Presto)
                <br/><br/>
                É medido em BPM (Batidas Por Minuto):
                <br/>
                • 60 BPM = 1 batida por segundo
                <br/>
                • 120 BPM = 2 batidas por segundo
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={markAsCompleted}>Concluir</Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export { R1 }; 
