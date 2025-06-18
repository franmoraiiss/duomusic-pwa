import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const R4 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('r4');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 04: Ritmos Brasileiros</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Samba</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                O samba é caracterizado por:
                <br/><br/>
                • Compasso 2/4
                <br/>
                • Síncope característica
                <br/>
                • Acentuação no segundo tempo
                <br/><br/>
                Padrão básico do tamborim:
                <br/>
                TUM - - ta - TUM - ta
                <br/><br/>
                Exemplo: "O Samba da Minha Terra" (Dorival Caymmi)
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Baião</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                O baião tem como características:
                <br/><br/>
                • Compasso 2/4
                <br/>
                • Acentuação forte no primeiro tempo
                <br/>
                • Zabumba marcando os tempos
                <br/><br/>
                Padrão básico do triângulo:
                <br/>
                TIN - tin - TIN - tin
                <br/><br/>
                Exemplo: "Asa Branca" (Luiz Gonzaga)
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Bossa Nova</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                A bossa nova se caracteriza por:
                <br/><br/>
                • Compasso 2/4
                <br/>
                • Batida sincopada no violão
                <br/>
                • "Batida diferente" de João Gilberto
                <br/><br/>
                Padrão básico do violão:
                <br/>
                TUM - tum - TUM - tum
                <br/><br/>
                Exemplo: "Garota de Ipanema" (Tom Jobim)
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

export { R4 }; 
