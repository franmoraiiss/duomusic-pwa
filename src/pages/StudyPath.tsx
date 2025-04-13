import { Box, Icon, Tabs, Text } from "@chakra-ui/react"
import StudyPathImage from "@/assets/music-path01.png"
import { SingleClass } from "@/components/single-class";
import { ClassSeparator } from "@/components/class-separator";
import { Grid2x2, User } from "lucide-react";

const StudyPath = () => {
  return (
    <Tabs.Root defaultValue="path" variant="plain" colorPalette="purple">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        backgroundColor="#F6F5F5"
      >
        <Tabs.Content 
          value="path"
          overflow="auto"
          maxHeight="90vh"
        >
          <Box paddingTop="3rem" paddingBottom="1rem" width="100%">
            <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Trilha de estudo</Text>
          </Box>
          <Box            
            width="100%"
            height="100%"
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="3rem"
          >
            <SingleClass
              image={StudyPathImage}
              text="Teoria musical básica"
            />
            <ClassSeparator />

            <SingleClass
              image={StudyPathImage}
              text="Teoria musical básica"
            />
            <ClassSeparator />

            <SingleClass
              image={StudyPathImage}
              text="Teoria musical básica"
            />
            <ClassSeparator />

            <SingleClass
              image={StudyPathImage}
              text="Teoria musical básica"
            />
            <ClassSeparator />

            <SingleClass
              image={StudyPathImage}
              text="Teoria musical básica"
            />
          </Box>
        </Tabs.Content>
        <Tabs.Content 
          value="profile" 
          overflow="auto"
          height="90vh"
        >
          Profile
        </Tabs.Content>
      </Box>
      <Box 
        backgroundColor="#FFFFFF"
        width="100%" 
        height="10vh"
        borderColor="#D9D0E3"
        borderWidth="1px"
        boxShadow="0px 5px 15px 5px rgba(0, 0, 0, .2)"
        display="flex" 
        flexDirection="row" 
        alignItems="center" 
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
  )
}

export { StudyPath }
