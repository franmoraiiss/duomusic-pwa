import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const C1 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('c1');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 01: O que são acordes?</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que são acordes?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Um acorde é um conjunto de três ou mais notas tocadas simultaneamente. É como se você estivesse empilhando notas uma em cima da outra para criar um som mais rico e harmonioso.
                <br/><br/>
                Por exemplo, quando você toca as notas Dó, Mi e Sol juntas, você está tocando o acorde de Dó maior.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Por que usar acordes?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Os acordes são fundamentais na música porque:
                <br/><br/>
                1. Criam harmonia e profundidade
                <br/>
                2. Dão suporte à melodia
                <br/>
                3. Estabelecem o clima da música
                <br/>
                4. São a base para acompanhamento
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Estrutura básica</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                A forma mais básica de um acorde é a tríade, que consiste em três notas:
                <br/><br/>
                1. Nota fundamental (base do acorde)
                <br/>
                2. Terça (3ª nota acima da fundamental)
                <br/>
                3. Quinta (5ª nota acima da fundamental)
                <br/><br/>
                Na próxima aula, veremos como essas notas se combinam para formar acordes maiores e menores!
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

export { C1 }; 
