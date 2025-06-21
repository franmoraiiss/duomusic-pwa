import { Box, Icon, Progress, Tabs, Text, Button, HStack } from "@chakra-ui/react"
import StudyPathImage from "@/assets/music-path01.png"
import EarImage from "@/assets/ouvido.jpg"
import Chords from "@/assets/acordes.jpeg"
import Diapason from "@/assets/diapason.jpg"
import PianoPlaygroundImage from "@/assets/piano-playground.jpg"
import RhythmImage from "@/assets/rhythm.jpg"
import SheetMusicImage from "@/assets/sheet-music.jpg"
import MusicPracticeImage from "@/assets/music-practice.jpg"
import AIExerciseImage from "@/assets/ai-test.jpg"
import { SingleClass } from "@/components/single-class";
import { ClassSeparator } from "@/components/class-separator";
import { SocialShare } from "@/components/social-share";
import { Grid2x2, User, LogOut } from "lucide-react";
import { OrientationWarning } from "@/components/orientation-warning";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useStreak } from "@/hooks/useStreak";
import { useProgress } from "@/hooks/useProgress";

const StudyPath = () => {
  const { completedLessons, markLessonCompleted } = useProgress();
  const [exerciseProgress, setExerciseProgress] = useState({ percentage: 0, completed: 0, total: 5 });
  const [moduleProgress, setModuleProgress] = useState({ percentage: 0, completed: 0, total: 6 });
  const { streak, topUsers, updateStreak } = useStreak();
  const navigate = useNavigate();

  const calculateExerciseProgress = (completedLessons: string[]) => {
    const totalTests = 5; // btest, ctest, etest, rtest, stest
    const completedTests = ['btest', 'ctest', 'etest', 'rtest', 'stest']
      .filter(test => completedLessons.includes(test)).length;
    const percentage = (completedTests / totalTests) * 100;
    
    return {
      percentage,
      completed: completedTests,
      total: totalTests
    };
  };

  const calculateModuleProgress = (completedLessons: string[]) => {
    const totalModules = 6; // basic-theory, chords, ear-training, rhythm, sheet-music, music-practice
    const completedModules = ['basic-theory', 'chords', 'ear-training', 'rhythm', 'sheet-music', 'music-practice']
      .filter(module => isModuleUnlocked(module, completedLessons)).length;
    const percentage = (completedModules / totalModules) * 100;
    
    return {
      percentage,
      completed: completedModules,
      total: totalModules
    };
  };

  // Update progress whenever completedLessons changes
  useEffect(() => {
    setExerciseProgress(calculateExerciseProgress(completedLessons));
    setModuleProgress(calculateModuleProgress(completedLessons));
  }, [completedLessons]);

  const handleLogout = () => {
    localStorage.clear(); // Clear all localStorage data
    navigate('/'); // Redirect to login page
  };

  const isModuleUnlocked = (moduleId: string, lessons: string[]) => {
    switch (moduleId) {
      case 'basic-theory':
        return true; // First module is always unlocked
      case 'chords':
        return lessons.includes('btest'); // Unlocked after completing basic theory test
      case 'ear-training':
        return lessons.includes('ctest'); // Will be unlocked after completing chords test
      case 'rhythm':
        return lessons.includes('etest'); // Will be unlocked after completing ear training test
      case 'sheet-music':
        return lessons.includes('rtest'); // Will be unlocked after completing rhythm test
      case 'music-practice':
        return lessons.includes('stest'); // Will be unlocked after completing sheet music test
      default:
        return true;
    }
  };

  const handleLessonComplete = async (lessonId: string) => {
    await markLessonCompleted(lessonId);
    updateStreak(); // Update streak when a lesson is completed
  };

  return (
    <>
      <OrientationWarning requiredOrientation="portrait" />
      <Tabs.Root defaultValue="path" variant="plain" colorPalette="purple">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          backgroundColor="#F6F5F5"
        >
          <Tabs.Content 
            value="path"
          >
            <Box paddingTop="3rem" paddingBottom="1rem" width="100%">
              <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Trilha de estudo</Text>
            </Box>
            <Box
              width="100%"
              maxHeight="75vh"
              overflow="auto"
              display="flex"
              flexDirection="column"
              alignItems="center"
              padding="3rem"
            >
              <SingleClass
                image={StudyPathImage}
                text="Teoria musical básica"
                classPath="/basic-music-theory"
                moduleId="basic-theory"
                isLocked={!isModuleUnlocked('basic-theory', completedLessons)}
                onComplete={() => handleLessonComplete('basic-theory')}
              />
              <ClassSeparator />

              <SingleClass
                image={Chords}
                text="Aprendendo acordes"
                classPath="/chords"
                moduleId="chords"
                isLocked={!isModuleUnlocked('chords', completedLessons)}
                onComplete={() => handleLessonComplete('chords')}
              />
              <ClassSeparator />

              <SingleClass
                image={EarImage}
                text="Treinando seu ouvido"
                classPath="/ear-training"
                moduleId="ear-training"
                isLocked={!isModuleUnlocked('ear-training', completedLessons)}
                onComplete={() => handleLessonComplete('ear-training')}
              />
              <ClassSeparator />

              <SingleClass
                image={RhythmImage}
                text="Ritmo e Tempo"
                classPath="/rhythm"
                moduleId="rhythm"
                isLocked={!isModuleUnlocked('rhythm', completedLessons)}
                onComplete={() => handleLessonComplete('rhythm')}
              />
              <ClassSeparator />

              <SingleClass
                image={SheetMusicImage}
                text="Leitura de Partitura"
                classPath="/sheet-music"
                moduleId="sheet-music"
                isLocked={!isModuleUnlocked('sheet-music', completedLessons)}
                onComplete={() => handleLessonComplete('sheet-music')}
              />
              <ClassSeparator />

              <SingleClass
                image={MusicPracticeImage}
                text="Prática Musical"
                classPath="/music-practice"
                moduleId="music-practice"
                isLocked={!isModuleUnlocked('music-practice', completedLessons)}
                onComplete={() => handleLessonComplete('music-practice')}
              />

              <Box marginTop="3rem">
                <SingleClass
                  image={AIExerciseImage}
                  text="Exercite com IA"
                  classPath="/ai-exercise"
                  moduleId="ai-exercise"
                  isLocked={false}
                />
              </Box>

              <Box marginTop="3rem">
                <SingleClass
                  image={Diapason}
                  text="Afinador"
                  classPath="/tuner"
                  moduleId="tuner"
                  isLocked={false}
                />
              </Box>

              <Box marginTop="3rem">
                <SingleClass
                  image={PianoPlaygroundImage}
                  text="Piano Playground"
                  classPath="/piano-playground"
                  moduleId="piano"
                  isLocked={false}
                />
              </Box>
            </Box>
          </Tabs.Content>
          <Tabs.Content 
            value="profile"
          >
            <Box 
              backgroundColor="#F6F5F5"
              height="100vh"
              paddingX="2rem"
            >
              <Box paddingY="2rem">
                <Text fontSize="2rem">Olá, {localStorage.getItem('user_name') || 'Estudante'}!</Text>
                <Text>Aqui você pode acompanhar seu progresso</Text>
              </Box>

              <Box paddingY="1rem">
                <Text>Exercícios realizados</Text>
                <Progress.Root value={exerciseProgress.percentage} size="xs" colorPalette="green">
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                  <Progress.ValueText>
                    {exerciseProgress.percentage}% ({exerciseProgress.completed} de {exerciseProgress.total})
                  </Progress.ValueText>
                </Progress.Root>
              </Box>

              <Box paddingY="1rem">
                <Text>Aulas concluídas</Text>
                <Progress.Root value={moduleProgress.percentage} size="xs" colorPalette="green">
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                  <Progress.ValueText>
                    {moduleProgress.percentage}% ({moduleProgress.completed} de {moduleProgress.total})
                  </Progress.ValueText>
                </Progress.Root>
              </Box>

              <Box paddingY="1rem">
                <Text>Seu streak atual:</Text>
                <Text fontWeight="light" textAlign="center" fontSize="2.5rem" paddingY="1rem">{streak} dias 🔥</Text>
                <Text fontWeight="light" fontSize="0.75rem">
                  {streak > 0 
                    ? "Parabéns, continue estudando para aumentar seu streak."
                    : "Complete uma aula hoje para começar seu streak!"}
                </Text>
              </Box>

              <Box paddingY="1rem">
                <Text>Ranking semanal:</Text>
                {topUsers.map((user, index) => (
                  <Text key={user.id} fontWeight="light" fontSize="1">
                    {index + 1}. {user.name} ({user.currentStreak} 🔥)
                  </Text>
                ))}
              </Box>

              <SocialShare
                exerciseProgress={exerciseProgress}
                moduleProgress={moduleProgress}
                streak={streak}
                userName={localStorage.getItem('user_name') || undefined}
              />

              <Box paddingY="2rem">
                <Button
                  width="full"
                  variant="outline"
                  colorScheme="red"
                  onClick={handleLogout}
                >
                  <HStack>
                    <LogOut size={20} />
                    <Text>Sair</Text>
                  </HStack>
                </Button>
              </Box>
            </Box>
          </Tabs.Content>
        </Box>
        <Box 
          backgroundColor="#FFFFFF"
          width="100%" 
          height="5rem"
          borderColor="#D9D0E3"
          borderWidth="1px"
          boxShadow="0px 5px 15px 5px rgba(0, 0, 0, .2)"
          display="flex" 
          flexDirection="row" 
          alignItems="center" 
          position="fixed"
          bottom="0"
          zIndex="1000"
        >
          <Tabs.List 
            width="100%"
            height="100%"
            display="flex" 
            flexDirection="row" 
            alignItems="center" 
            justifyContent="space-around"
          >
            <Tabs.Trigger value="path">
              <Icon size="xl"><Grid2x2 /></Icon>
            </Tabs.Trigger>
            <Tabs.Trigger value="profile">
              <Icon size="xl"><User /></Icon>
            </Tabs.Trigger>
          </Tabs.List>
        </Box>
      </Tabs.Root>
    </>
  )
}

export { StudyPath }
