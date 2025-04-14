import { OrientationWarning } from '@/components/orientation-warning';
import { Box, Icon, Text } from '@chakra-ui/react';
import SoundfontProvider from "@/providers/sound-provider"
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router';

const audioContext = new window.AudioContext();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

interface PianoProps { 
  isLoading: boolean; 
  playNote: number; 
  stopNote: number; 
}

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f5'),
};

const PianoPlayground = () => {
  const navigate = useNavigate();

  return (
    <>
      <Box
        position="fixed"
        top="0"
        zIndex="1000"
      >
        <Icon margin="1rem" onClick={() => navigate(-1)}>
          <ChevronLeft />
        </Icon>
      </Box>
      <OrientationWarning requiredOrientation="landscape" />
      <Box
        display="flex"
        maxWidth="100vw"
        height="100vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="space-between"
      >
        <Text 
          marginTop="2rem" 
          color="#2D0C57" 
          fontWeight="bold" 
          fontSize="1.5rem"
        >
          Playground
        </Text>
        <Box
          display="flex"
          width="100%"
          height="75%"
        >
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }: PianoProps) => (
              <Piano
                noteRange={noteRange}
                playNote={playNote}
                stopNote={stopNote}
                disabled={isLoading}
              />
            )}
          />
        </Box>
      </Box>
    </>
  );
}

export { PianoPlayground };
