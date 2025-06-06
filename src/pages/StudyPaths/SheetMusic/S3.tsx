import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const S3 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('s3')) {
      completed.push('s3');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 03: Figuras e Durações</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Figuras Musicais</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                As figuras musicais indicam a duração das notas:
                <br/><br/>
                • Semibreve (○): 4 tempos
                <br/>
                • Mínima (𝅗𝅥): 2 tempos
                <br/>
                • Semínima (♩): 1 tempo
                <br/>
                • Colcheia (♪): 1/2 tempo
                <br/>
                • Semicolcheia (♬): 1/4 tempo
                <br/><br/>
                Cada figura dura metade da anterior.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Ligaduras e Pontos</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Modificadores de duração:
                <br/><br/>
                • Ligadura: Une duas notas da mesma altura
                <br/>
                • Ponto de aumento: Aumenta a duração em 50%
                <br/><br/>
                Exemplos:
                <br/>
                • Mínima pontuada = 3 tempos
                <br/>
                • Semínima pontuada = 1.5 tempos
                <br/>
                • Duas semínimas ligadas = 2 tempos
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Pausas</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Cada figura tem sua pausa correspondente:
                <br/><br/>
                • Pausa de semibreve: retângulo acima da 4ª linha
                <br/>
                • Pausa de mínima: retângulo abaixo da 3ª linha
                <br/>
                • Pausa de semínima: símbolo em zigue-zague
                <br/>
                • Pausa de colcheia: gancho para a direita
                <br/><br/>
                As pausas têm a mesma duração das notas que representam.
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

export { S3 }; 
