import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft, Check, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const BasicMusicTheory = () => {
  const navigate = useNavigate();
  const { completedLessons } = useProgress();

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const isLessonLocked = (lessonId: string) => {
    switch (lessonId) {
      case 'b1':
        return false; // First lesson is always unlocked
      case 'b2':
        return !isLessonCompleted('b1');
      case 'b3':
        return !isLessonCompleted('b2');
      case 'b4':
        return !isLessonCompleted('b3');
      case 'btest':
        return !isLessonCompleted('b4');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Teoria musical básica</Text>
      </Box>
      <Box marginTop="3rem">
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/basic-music-theory/01', 'b1')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor="pointer"
          opacity={1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 1: Introdução</Text>
          {isLessonCompleted('b1') && (
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
          onClick={() => handleLessonClick('/basic-music-theory/02', 'b2')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('b2') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('b2') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 2: Ritmo</Text>
          {isLessonCompleted('b2') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('b2') && (
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
          onClick={() => handleLessonClick('/basic-music-theory/03', 'b3')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('b3') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('b3') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 3: Intensidade</Text>
          {isLessonCompleted('b3') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('b3') && (
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
          onClick={() => handleLessonClick('/basic-music-theory/04', 'b4')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('b4') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('b4') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Aula 4: Timbre</Text>
          {isLessonCompleted('b4') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('b4') && (
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
          onClick={() => handleLessonClick('/basic-music-theory/test', 'btest')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('btest') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('btest') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Exercícios</Text>
          {isLessonCompleted('btest') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('btest') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
      </Box>
    </Box>
  )
}

export { BasicMusicTheory }
