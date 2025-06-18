import { Box, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft, Check, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useProgress } from "@/hooks/useProgress";

const MusicPractice = () => {
  const navigate = useNavigate();
  const { completedLessons } = useProgress();

  const isLessonCompleted = (lessonId: string) => {
    return completedLessons.includes(lessonId);
  };

  const isLessonLocked = (lessonId: string) => {
    // Check for development unlock flag
    const devUnlockAll = localStorage.getItem('devUnlockAll');
    if (devUnlockAll === 'true') {
      return false;
    }

    // First verify if sheet music is completed
    if (!completedLessons.includes('stest')) {
      return true;
    }

    switch (lessonId) {
      case 'twinkle':
        return false; // First song is always unlocked
      case 'song2':
        return !isLessonCompleted('twinkle');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Prática Musical</Text>
      </Box>
      <Box marginTop="3rem">
        <Box
          width="100%"
          backgroundColor="#FFFFFF"
          borderColor="#D9D0E3"
          borderWidth="1px"
          padding="1rem"
          marginBottom="1rem"
          onClick={() => handleLessonClick('/music-practice/twinkle', 'twinkle')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('twinkle') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('twinkle') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Brilha Brilha Estrelinha</Text>
          {isLessonCompleted('twinkle') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('twinkle') && (
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
          onClick={() => handleLessonClick('/music-practice/song2', 'song2')}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          cursor={isLessonLocked('song2') ? 'not-allowed' : 'pointer'}
          opacity={isLessonLocked('song2') ? 0.5 : 1}
        >
          <Text color="#2D0C57" fontWeight="bold">Parabéns pra Você</Text>
          {isLessonCompleted('song2') ? (
            <Icon color="#0BCE83">
              <Check />
            </Icon>
          ) : isLessonLocked('song2') && (
            <Icon color="#2D0C57">
              <Lock />
            </Icon>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { MusicPractice }; 
