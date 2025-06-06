import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const S2 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('s2')) {
      completed.push('s2');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 02: Notas na Pauta</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Notas na Clave de Sol</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Na clave de Sol, as notas nas linhas são:
                <br/><br/>
                • 1ª linha: Mi
                <br/>
                • 2ª linha: Sol
                <br/>
                • 3ª linha: Si
                <br/>
                • 4ª linha: Ré
                <br/>
                • 5ª linha: Fá
                <br/><br/>
                Uma dica: "Eu Gosto Bem Do Fá" (E-G-B-D-F)
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Notas nos Espaços</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Nos espaços da clave de Sol, temos:
                <br/><br/>
                • 1º espaço: Fá
                <br/>
                • 2º espaço: Lá
                <br/>
                • 3º espaço: Dó
                <br/>
                • 4º espaço: Mi
                <br/><br/>
                Uma dica: "FACE" (F-A-C-E)
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Alterações</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                As notas podem ser alteradas por:
                <br/><br/>
                • Sustenido (#): Sobe meio tom
                <br/>
                • Bemol (♭): Desce meio tom
                <br/>
                • Bequadro (♮): Cancela alterações
                <br/><br/>
                Estas alterações podem aparecer:
                <br/>
                • Na armadura de clave (início)
                <br/>
                • Durante a música (acidentes)
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

export { S2 }; 
