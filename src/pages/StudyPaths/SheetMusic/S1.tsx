import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const S1 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('s1');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 01: Pauta e Claves</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">A Pauta Musical</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                A pauta (ou pentagrama) é o conjunto de cinco linhas horizontais e paralelas onde escrevemos a música.
                <br/><br/>
                • As linhas são contadas de baixo para cima
                <br/>
                • Os espaços entre as linhas também são usados
                <br/>
                • Cada linha e espaço representa uma nota musical
                <br/><br/>
                A pauta é a base da escrita musical, como o papel pautado é para a escrita comum.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Claves</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                As claves são símbolos que determinam a altura das notas na pauta:
                <br/><br/>
                • Clave de Sol (𝄞): Usada para notas agudas
                <br/>
                • Clave de Fá (𝄢): Usada para notas graves
                <br/>
                • Clave de Dó (𝄡): Usada para notas médias
                <br/><br/>
                A clave de Sol é a mais comum e é usada para a maioria dos instrumentos melódicos.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Linhas e Espaços Suplementares</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Quando precisamos escrever notas que estão além das cinco linhas:
                <br/><br/>
                • Usamos linhas adicionais acima ou abaixo da pauta
                <br/>
                • São chamadas de linhas suplementares
                <br/>
                • Permitem escrever notas mais agudas ou graves
                <br/><br/>
                Estas linhas extras expandem o alcance da pauta musical.
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

export { S1 }; 
