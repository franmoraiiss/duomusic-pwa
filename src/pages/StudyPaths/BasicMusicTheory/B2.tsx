import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const B2 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('b2');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 02: Ritmo</Text>
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
              <Text textAlign="justify" fontSize="1rem" paddingX="2rem">
                Ritmo é a organização dos sons e dos silêncios ao longo do tempo. É o que faz você bater o pé ou balançar a cabeça quando ouve uma música!
                Ele está presente mesmo quando não há melodia — pense nas palmas de uma torcida ou no som de um tambor.
                Cada nota pode ter uma duração diferente:

                Algumas são mais longas (como uma nota que dura 4 tempos)

                Outras são mais curtas (como uma nota rápida de meio tempo)

                Essas durações criam padrões rítmicos, como o da música "Parabéns pra Você" — que todo mundo reconhece só pelo ritmo!
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que é Tempo?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                O tempo é a velocidade da música. Ele é medido em BPM (batidas por minuto).

                Uma música com 60 BPM tem uma batida por segundo (bem lenta).

                Já uma com 120 BPM tem duas batidas por segundo (mais animada).

                O tempo é como o relógio da música — ele diz o quão rápido ou devagar tudo deve ser tocado.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que são Compassos?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                O compasso organiza a música em grupos regulares de batidas.

                O mais comum é o compasso 4/4: quatro batidas por compasso, sendo a primeira geralmente mais forte.

                Outro exemplo é o 3/4, comum em valsas (um-dois-três, um-dois-três).

                Visualmente, os compassos são separados por linhas verticais na partitura, e ajudam a ler e tocar com precisão
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={markAsCompleted}>Voltar</Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export { B2 };
