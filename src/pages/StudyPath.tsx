import { Box, Icon, Tabs, Text } from "@chakra-ui/react"
import StudyPathImage from "@/assets/music-path01.png"
import { SingleClass } from "@/components/single-class";
import { ClassSeparator } from "@/components/class-separator";
import { Grid2x2, User } from "lucide-react";
import { OrientationWarning } from "@/components/orientation-warning";

const StudyPath = () => {
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
              />
              <ClassSeparator />

              <SingleClass
                image={StudyPathImage}
                text="Teoria musical básica"
                classPath="/basic-music-theory"
              />
              <ClassSeparator />

              <SingleClass
                image={StudyPathImage}
                text="Teoria musical básica"
                classPath="/basic-music-theory"
              />
              <ClassSeparator />

              <SingleClass
                image={StudyPathImage}
                text="Teoria musical básica"
                classPath="/basic-music-theory"
              />
              <ClassSeparator />

              <SingleClass
                image={StudyPathImage}
                text="Teoria musical básica"
                classPath="/404"
              />

              <Box marginTop="3rem">
                <SingleClass
                  image={StudyPathImage}
                  text="Afinador"
                  classPath="/tuner"
                />
              </Box>

              <Box marginTop="3rem">
                <SingleClass
                  image={StudyPathImage}
                  text="Piano Playground"
                  classPath="/piano-playground"
                />
              </Box>
            </Box>
          </Tabs.Content>
          <Tabs.Content 
            value="profile"
          >
            Profile
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
