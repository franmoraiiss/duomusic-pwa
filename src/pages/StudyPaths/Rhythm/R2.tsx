import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const R2 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('r2')) {
      completed.push('r2');
      localStorage.setItem('completedLessons', JSON.stringify(completed));
    }
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 02: Compassos e Tempos</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Compassos</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                O compasso é uma unidade de organização do ritmo que agrupa os pulsos em padrões regulares.
                <br/><br/>
                Cada compasso contém:
                <br/>
                • Um número específico de tempos
                <br/>
                • Uma acentuação regular (tempo forte e fraco)
                <br/>
                • Uma divisão clara marcada por barras verticais
                <br/><br/>
                Os compassos ajudam a organizar a música e manter o ritmo consistente.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Fórmula de Compasso</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                A fórmula de compasso é representada por dois números:
                <br/><br/>
                4/4 (quaternário):
                <br/>
                • 4 tempos por compasso
                <br/>
                • Cada tempo vale 1/4 (semínima)
                <br/><br/>
                3/4 (ternário):
                <br/>
                • 3 tempos por compasso
                <br/>
                • Cada tempo vale 1/4 (semínima)
                <br/><br/>
                2/4 (binário):
                <br/>
                • 2 tempos por compasso
                <br/>
                • Cada tempo vale 1/4 (semínima)
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Acentuação</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Em cada compasso, alguns tempos são naturalmente mais fortes:
                <br/><br/>
                4/4:
                <br/>
                FORTE - fraco - médio - fraco
                <br/><br/>
                3/4:
                <br/>
                FORTE - fraco - fraco
                <br/><br/>
                2/4:
                <br/>
                FORTE - fraco
                <br/><br/>
                Essa acentuação natural dá o "balanço" característico de cada compasso.
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

export { R2 }; 
