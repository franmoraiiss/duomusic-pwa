import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const B4 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('b4');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 04: Timbre</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que é Timbre?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
              Timbre é o que torna um som único, mesmo que a nota seja a mesma.
              <br/>
              <br/>
                Por exemplo:
                Um Dó tocado no piano soa diferente de um Dó cantado por uma pessoa.
                Um violão tem um timbre diferente de um saxofone.
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Timbre</Text>
              <Text textAlign="justify" fontSize="1rem" paddingX="2rem">
                Timbre é a identidade do som, como se fosse a "voz" de cada instrumento.<br/><br/>
                No piano, você também pode ouvir diferenças de timbre dependendo da maneira como toca:<br/>
                Toques mais suaves podem soar mais "aveludados".<br/>
                Toques mais fortes podem soar mais "brilhantes" ou "agressivos".<br/>
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={markAsCompleted}>Voltar</Button>
            </Box>
          </Box>
        )}

        {page === 3 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Timbre</Text>
              <Text textAlign="justify" fontSize="1rem" paddingX="2rem">
                Por que o Timbre é importante?<br/><br/>
                Ele traz emoção e variedade à música! Um bom músico sabe explorar diferentes timbres para tornar a execução mais interessante e expressiva.
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

export { B4 };
