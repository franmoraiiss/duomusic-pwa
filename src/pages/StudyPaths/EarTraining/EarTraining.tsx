import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft, Check, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const EarTraining = () => {
  const navigate = useNavigate();
  const { completedLessons } = useProgress();

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const isLessonLocked = (lessonId: string) => {
    const basicTheoryCompleted = completedLessons.includes('btest');
    const chordsCompleted = completedLessons.includes('ctest');
    
    if (!basicTheoryCompleted || !chordsCompleted) {
      return true;
    }

    switch (lessonId) {
      case 'e1':
        return false;
      case 'e2':
        return !isLessonCompleted('e1');
      case 'e3':
        return !isLessonCompleted('e2');
      case 'e4':
        return !isLessonCompleted('e3');
      case 'etest':
        return !isLessonCompleted('e4');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Treinamento Auditivo</Text>
      </Box>
      <Box marginTop="3rem">
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/ear-training/01', 'e1')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor="pointer"
          opacity={1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 1: Reconhecimento de Notas</Text>
          {isLessonCompleted('e1') && (
            <Icon color="#0BCE83">
              <Check />
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
          onClick={() => handleLessonClick('/ear-training/02', 'e2')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('e2') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('e2') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 2: Intervalos</Text>
          {isLessonCompleted('e2') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('e2') && (
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
          onClick={() => handleLessonClick('/ear-training/03', 'e3')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('e3') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('e3') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 3: Acordes</Text>
          {isLessonCompleted('e3') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('e3') && (
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
          onClick={() => handleLessonClick('/ear-training/04', 'e4')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('e4') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('e4') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 4: Melodias</Text>
          {isLessonCompleted('e4') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('e4') && (
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
          onClick={() => handleLessonClick('/ear-training/test', 'etest')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('etest') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('etest') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Teste Final</Text>
          {isLessonCompleted('etest') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('etest') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
      </Box>
    </Box>
  );
}

export { EarTraining };
