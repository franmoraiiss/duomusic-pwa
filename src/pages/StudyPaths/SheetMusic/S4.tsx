import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

const S4 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('s4')) {
      completed.push('s4');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 04: Lendo Melodias Simples</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Elementos da Melodia</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Para ler uma melodia, observe:
                <br/><br/>
                • Armadura de clave (alterações)
                <br/>
                • Fórmula de compasso
                <br/>
                • Andamento indicado
                <br/>
                • Direção das notas (sobe/desce)
                <br/><br/>
                Comece identificando estes elementos antes de tocar.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Passos para Leitura</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Siga estes passos:
                <br/><br/>
                1. Identifique o compasso
                <br/>
                2. Marque o pulso batendo o pé
                <br/>
                3. Solfe as notas (diga os nomes)
                <br/>
                4. Observe as durações
                <br/><br/>
                Pratique cada passo separadamente antes de juntar tudo.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Dicas Práticas</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Para melhorar sua leitura:
                <br/><br/>
                • Pratique lentamente
                <br/>
                • Use um metrônomo
                <br/>
                • Divida em pequenos trechos
                <br/>
                • Identifique padrões repetidos
                <br/><br/>
                A leitura melhora com prática regular e paciente.
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

export { S4 }; 
