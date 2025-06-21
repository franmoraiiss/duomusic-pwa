import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft, Check, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const Chords = () => {
  const navigate = useNavigate();
  const { completedLessons } = useProgress();

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const isLessonLocked = (lessonId: string) => {
    if (!completedLessons.includes('btest')) {
      return true;
    }

    switch (lessonId) {
      case 'c1':
        return false;
      case 'c2':
        return !isLessonCompleted('c1');
      case 'c3':
        return !isLessonCompleted('c2');
      case 'c4':
        return !isLessonCompleted('c3');
      case 'ctest':
        return !isLessonCompleted('c4');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aprendendo acordes</Text>
      </Box>
      <Box marginTop="3rem">
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/chords/01', 'c1')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('c1') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('c1') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 1: O que são acordes?</Text>
          {isLessonCompleted('c1') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('c1') && (
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
          onClick={() => handleLessonClick('/chords/02', 'c2')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('c2') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('c2') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 2: Acordes maiores e menores</Text>
          {isLessonCompleted('c2') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('c2') && (
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
          onClick={() => handleLessonClick('/chords/03', 'c3')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('c3') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('c3') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 3: Progressões básicas</Text>
          {isLessonCompleted('c3') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('c3') && (
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
          onClick={() => handleLessonClick('/chords/04', 'c4')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('c4') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('c4') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 4: Aplicando em músicas</Text>
          {isLessonCompleted('c4') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('c4') && (
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
          onClick={() => handleLessonClick('/chords/test', 'ctest')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('ctest') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('ctest') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Teste Final</Text>
          {isLessonCompleted('ctest') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('ctest') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { Chords }; 
