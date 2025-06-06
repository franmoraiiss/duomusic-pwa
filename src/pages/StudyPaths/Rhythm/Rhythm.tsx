import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft, Check, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Rhythm = () => {
  const navigate = useNavigate();
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    // Load completed lessons from localStorage
    const completed = localStorage.getItem('completedLessons');
    if (completed) {
      setCompletedLessons(JSON.parse(completed));
    }
  }, []);

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const isLessonLocked = (lessonId: string) => {
    // First verify if ear training is completed
    if (!completedLessons.includes('etest')) {
      return true;
    }

    switch (lessonId) {
      case 'r1':
        return false; // First lesson is always unlocked
      case 'r2':
        return !isLessonCompleted('r1');
      case 'r3':
        return !isLessonCompleted('r2');
      case 'r4':
        return !isLessonCompleted('r3');
      case 'rtest':
        return !isLessonCompleted('r4');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Ritmo e Tempo</Text>
      </Box>
      <Box marginTop="3rem">
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/rhythm/01', 'r1')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('r1') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('r1') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 1: Conceitos Básicos de Ritmo</Text>
          {isLessonCompleted('r1') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('r1') && (
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
          onClick={() => handleLessonClick('/rhythm/02', 'r2')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('r2') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('r2') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 2: Compassos e Tempos</Text>
          {isLessonCompleted('r2') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('r2') && (
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
          onClick={() => handleLessonClick('/rhythm/03', 'r3')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('r3') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('r3') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 3: Figuras Rítmicas</Text>
          {isLessonCompleted('r3') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('r3') && (
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
          onClick={() => handleLessonClick('/rhythm/04', 'r4')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('r4') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('r4') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 4: Ritmos Brasileiros</Text>
          {isLessonCompleted('r4') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('r4') && (
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
          onClick={() => handleLessonClick('/rhythm/test', 'rtest')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('rtest') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('rtest') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Teste Final</Text>
          {isLessonCompleted('rtest') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('rtest') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { Rhythm }; 
