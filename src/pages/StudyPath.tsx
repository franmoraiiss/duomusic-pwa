import { Box, Icon, Progress, Tabs, Text } from "@chakra-ui/react"
import StudyPathImage from "@/assets/music-path01.png"
import EarImage from "@/assets/ouvido.jpg"
import Chords from "@/assets/acordes.jpeg"
import Diapason from "@/assets/diapason.jpg"
import PianoPlaygroundImage from "@/assets/piano-playground.jpg"
import { SingleClass } from "@/components/single-class";
import { ClassSeparator } from "@/components/class-separator";
import { Grid2x2, User } from "lucide-react";
import { OrientationWarning } from "@/components/orientation-warning";
import { useEffect, useState } from "react";

const StudyPath = () => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);

  useEffect(() => {
    // Load completed lessons from localStorage
    const completed = localStorage.getItem('completedLessons');
    if (completed) {
      setCompletedLessons(JSON.parse(completed));
    }
  }, []);

  const isModuleUnlocked = (moduleId: string) => {
    switch (moduleId) {
      case 'basic-theory':
        return true; // First module is always unlocked
      case 'chords':
        return completedLessons.includes('btest'); // Unlocked after completing basic theory test
      case 'ear-training':
        return completedLessons.includes('chords-test'); // Will be unlocked after completing chords module
      default:
        return true;
    }
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
                isLocked={!isModuleUnlocked('basic-theory')}
              />
              <ClassSeparator />

              <SingleClass
                image={Chords}
                text="Aprendendo acordes"
                classPath="/chords"
                moduleId="chords"
                isLocked={!isModuleUnlocked('chords')}
              />
              <ClassSeparator />

              <SingleClass
                image={EarImage}
                text="Treinando seu ouvido"
                classPath="/ear-training"
                moduleId="ear-training"
                isLocked={!isModuleUnlocked('ear-training')}
              />

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
                <Text fontSize="2rem">Olá, Francisco!</Text>
                <Text>Aqui você pode acompanhar seu progresso</Text>
              </Box>

              <Box paddingY="1rem">
                <Text>Exercícios realizados</Text>
                <Progress.Root value={50} size="xs" colorPalette="green">
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                  <Progress.ValueText>50% (5 de 10)</Progress.ValueText>
                </Progress.Root>
              </Box>

              <Box paddingY="1rem">
                <Text>Aulas concluídas</Text>
                <Progress.Root value={20} size="xs" colorPalette="green">
                  <Progress.Track>
                    <Progress.Range />
                  </Progress.Track>
                  <Progress.ValueText>20% (1 de 4)</Progress.ValueText>
                </Progress.Root>
              </Box>

              <Box paddingY="1rem">
                <Text>Seu streak atual:</Text>
                <Text fontWeight="light" textAlign="center" fontSize="2.5rem" paddingY="1rem">5 dias 🔥</Text>
                <Text fontWeight="light" fontSize="0.75rem">Parabéns, continue estudando para aumentar seu streak.</Text>
              </Box>

              <Box paddingY="1rem">
                <Text>Ranking semanal:</Text>
                <Text fontWeight="light" fontSize="1">1. Francisco (5 🔥)</Text>
                <Text fontWeight="light" fontSize="1">2. User (1 🔥)</Text>
                <Text fontWeight="light" fontSize="1">3. User (1 🔥)</Text>
                <Text fontWeight="light" fontSize="1">4. User (1 🔥)</Text>
                <Text fontWeight="light" fontSize="1">5. User (1 🔥)</Text>
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
