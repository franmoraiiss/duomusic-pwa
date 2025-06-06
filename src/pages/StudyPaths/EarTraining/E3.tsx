import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import SoundfontProvider from "@/providers/sound-provider";

const audioContext = new window.AudioContext();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

interface SoundfontProviderProps {
  isLoading: boolean;
  playNote: (midiNumber: number) => void;
  stopNote: (midiNumber: number) => void;
}

const noteRange = {
  first: MidiNumbers.fromNote('c3'),
  last: MidiNumbers.fromNote('f4'),
};

const E3 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('e3')) {
      completed.push('e3');
      localStorage.setItem('completedLessons', JSON.stringify(completed));
    }
    navigate(-1);
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 03: Acordes</Text>
      </Box>
      <Progress.Root value={(100*page)/totalPages} size="xs" colorPalette="green">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>

      <Box>
        {page === 1 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Reconhecendo Acordes</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Acordes são grupos de três ou mais notas tocadas simultaneamente. Os tipos mais comuns são:
                <br/><br/>
                • Maior (som "alegre")
                <br/>
                • Menor (som "triste")
                <br/>
                • Diminuto (som "tenso")
                <br/>
                • Aumentado (som "misterioso")
                <br/><br/>
                Nesta aula, vamos focar em reconhecer acordes maiores e menores.
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={() => setPage(page + 1)}>Continuar</Button>
            </Box>
          </Box>
        )}

        {page === 2 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Como Praticar</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                1. Toque um acorde no piano (três notas juntas)
                <br/>
                2. Tente identificar se é maior ou menor
                <br/>
                3. Toque o mesmo acorde em diferentes posições
                <br/>
                4. Compare acordes maiores e menores da mesma nota
              </Text>
              <Box
                display="flex"
                width="100%"
                height="200px"
                paddingX="2rem"
                marginY="2rem"
              >
                <SoundfontProvider
                  instrumentName="acoustic_grand_piano"
                  audioContext={audioContext}
                  hostname={soundfontHostname}
                  render={({ isLoading, playNote, stopNote }: SoundfontProviderProps) => (
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
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={() => setPage(page + 1)}>Continuar</Button>
            </Box>
          </Box>
        )}

        {page === 3 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Dicas para Melhorar</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                • Associe acordes maiores com emoções positivas
                <br/>
                • Associe acordes menores com emoções melancólicas
                <br/>
                • Pratique alternando entre maior e menor da mesma nota
                <br/>
                • Tente identificar acordes em músicas que você conhece
                <br/><br/>
                Lembre-se: a prática constante é a chave para desenvolver um bom ouvido harmônico!
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={markAsCompleted}>Voltar</Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}

export { E3 }; 
