import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const P1 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('p1');
    navigate(-1);
  };

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Prática Musical - Aula 1</Text>
      </Box>
      
      <Box padding="2rem">
        <Text fontSize="sm" color="#2D0C57" marginBottom="2rem">
          Página {page} de {totalPages}
        </Text>
        
        {page === 1 && (
          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#2D0C57" marginBottom="1rem">
              Introdução à Prática Musical
            </Text>
            <Text fontSize="1rem" color="#2D0C57" marginBottom="2rem">
              Bem-vindo ao módulo de Prática Musical! Aqui você aprenderá a tocar músicas reais no piano virtual.
            </Text>
            <Text fontSize="1rem" color="#2D0C57" marginBottom="2rem">
              Cada música será apresentada com uma demonstração, e depois você poderá praticar tocando as notas na sequência correta.
            </Text>
          </Box>
        )}
        
        {page === 2 && (
          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#2D0C57" marginBottom="1rem">
              Como Funciona
            </Text>
            <Text fontSize="1rem" color="#2D0C57" marginBottom="2rem">
              1. Primeiro, ouça a melodia completa para familiarizar-se com a música
            </Text>
            <Text fontSize="1rem" color="#2D0C57" marginBottom="2rem">
              2. Depois, pratique tocando as notas na sequência correta
            </Text>
            <Text fontSize="1rem" color="#2D0C57" marginBottom="2rem">
              3. Complete a música para desbloquear a próxima
            </Text>
          </Box>
        )}
        
        {page === 3 && (
          <Box>
            <Text fontSize="1.5rem" fontWeight="bold" color="#2D0C57" marginBottom="1rem">
              Vamos Começar!
            </Text>
            <Text fontSize="1rem" color="#2D0C57" marginBottom="2rem">
              Agora você está pronto para começar sua jornada musical! 
              Vamos começar com músicas simples e ir aumentando a dificuldade.
            </Text>
            <Text fontSize="1rem" color="#2D0C57" marginBottom="2rem">
              Lembre-se: a prática leva à perfeição! 🎵
            </Text>
          </Box>
        )}
        
        <Box display="flex" justifyContent="space-between" marginTop="2rem">
          <Button 
            onClick={prevPage} 
            disabled={page === 1}
            bg="#2D0C57"
            color="white"
          >
            Anterior
          </Button>
          
          {page === totalPages ? (
            <Button 
              onClick={markAsCompleted}
              bg="#0BCE83"
              color="white"
            >
              Completar Aula
            </Button>
          ) : (
            <Button 
              onClick={nextPage}
              bg="#0BCE83"
              color="white"
            >
              Próximo
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default P1; 
