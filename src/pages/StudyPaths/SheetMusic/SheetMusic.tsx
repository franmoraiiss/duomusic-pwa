import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft, Check, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const SheetMusic = () => {
  const navigate = useNavigate();
  const { completedLessons } = useProgress();

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const isLessonLocked = (lessonId: string) => {
    // First verify if rhythm is completed
    if (!completedLessons.includes('rtest')) {
      return true;
    }

    switch (lessonId) {
      case 's1':
        return false; // First lesson is always unlocked
      case 's2':
        return !isLessonCompleted('s1');
      case 's3':
        return !isLessonCompleted('s2');
      case 's4':
        return !isLessonCompleted('s3');
      case 'stest':
        return !isLessonCompleted('s4');
      default:
        return false;
    }
  };

  const handleLessonClick = (path: string, lessonId: string) => {
    if (!isLessonLocked(lessonId)) {
      navigate(path);
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Leitura de Partitura</Text>
      </Box>
      <Box marginTop="3rem">
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/sheet-music/01', 's1')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('s1') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('s1') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 1: Pauta e Claves</Text>
          {isLessonCompleted('s1') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('s1') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/sheet-music/02', 's2')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('s2') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('s2') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 2: Notas na Pauta</Text>
          {isLessonCompleted('s2') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('s2') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/sheet-music/03', 's3')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('s3') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('s3') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 3: Figuras e Durações</Text>
          {isLessonCompleted('s3') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('s3') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/sheet-music/04', 's4')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('s4') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('s4') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 4: Lendo Melodias Simples</Text>
          {isLessonCompleted('s4') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('s4') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/sheet-music/test', 'stest')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('stest') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('stest') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Teste Final</Text>
          {isLessonCompleted('stest') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('stest') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { SheetMusic }; 
