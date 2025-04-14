import { OrientationWarning } from '@/components/orientation-warning';
import { Box } from '@chakra-ui/react';
import SoundfontProvider from "@/providers/sound-provider"
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';

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
  return (
    <>
      <OrientationWarning />
      <Box
        display="flex"
        width="100%"
        height="100vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-end"
      >      
        <Box
          display="flex"
          width="100%"
          height="280px"
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
