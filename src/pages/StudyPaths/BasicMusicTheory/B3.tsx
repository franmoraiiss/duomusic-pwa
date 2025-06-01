import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const B3 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('b3')) {
      completed.push('b3');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 03: Intensidade</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que é Intensidade?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Intensidade é o volume com que um som é tocado ou cantado: pode ser suave como um sussurro ou forte como um trovão.
                Na música, chamamos essa variação de dinâmica.
                <br/>
                <br/>
                Por exemplo:
                Uma canção de ninar costuma ser tocada com intensidade suave.
                Um refrão animado de rock é tocado com intensidade forte.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Intensidade</Text>
              <Text textAlign="justify" fontSize="1rem" paddingX="2rem">
                Na partitura, usamos símbolos italianos para indicar isso, como:
                <br/>
                <br/>
                p (piano): tocar suave
                <br/>
                f (forte): tocar forte
                <br/>
                mf (mezzo-forte): meio forte
                <br/>
                crescendo (cresc.): aumentar a intensidade aos poucos
                <br/>
                decrescendo (decresc.): diminuir a intensidade aos poucos
                <br/>
                <br/>
                No piano, você controla a intensidade pela força que aplica nas teclas. Teclas pressionadas de leve soam suaves, enquanto pressionadas com mais força soam mais altas.
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

export { B3 };
