import { Box, Button, Icon, Progress, Text, Image } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import ClaveSol from "@/assets/clave-sol.png"

const B1 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('b1')) {
      completed.push('b1');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 01: Introdução</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que é Música?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Música é a arte de organizar sons e silêncios no tempo, criando ritmos, melodias e harmonias que podem expressar emoções, contar histórias ou apenas trazer alegria. Desde batidas simples até grandes composições, a música é uma linguagem universal que conecta pessoas no mundo inteiro.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Notas musicais</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
              As notas musicais são os sons básicos que formam todas as músicas. No sistema que usamos, temos sete notas principais: Dó, Ré, Mi, Fá, Sol, Lá e Si. Elas se repetem em diferentes alturas (mais graves ou mais agudas) ao longo do piano.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Pauta Musical e Clave de Sol</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
              A pauta é um conjunto de cinco linhas e quatro espaços onde escrevemos a música. Cada linha e espaço representa uma nota.
              A clave de sol é um símbolo colocado no início da pauta, indicando que as notas ali serão tocadas em uma altura mais aguda, como a maioria das melodias que tocamos com a mão direita no piano.
              </Text>
              <Image borderTopRadius="2xl" src={ClaveSol} marginTop="2rem" paddingX="2rem"/>
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

export { B1 };
