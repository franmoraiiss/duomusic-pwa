import { Box, Button, Icon, Progress, Text } from "@chakra-ui/react";
import { ChevronLeft } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import SoundfontProvider from "@/providers/sound-provider";
import { useProgress } from "@/hooks/useProgress";

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

const C2 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('c2');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 02: Acordes Maiores e Menores</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Acordes Maiores</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Um acorde maior é formado por:
                <br/><br/>
                • Nota fundamental (base)
                <br/>
                • Terça maior (4 semitons acima)
                <br/>
                • Quinta justa (7 semitons acima)
                <br/><br/>
                Por exemplo, o acorde de Dó maior (C) é formado pelas notas: Dó (C), Mi (E) e Sol (G).
                Experimente tocar no piano abaixo:
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

        {page === 2 && (
          <Box display="flex" flexDirection="column" justifyContent="space-between" alignItems="space-between" height="100%">
            <Box> 
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Acordes Menores</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Um acorde menor é formado por:
                <br/><br/>
                • Nota fundamental (base)
                <br/>
                • Terça menor (3 semitons acima)
                <br/>
                • Quinta justa (7 semitons acima)
                <br/><br/>
                Por exemplo, o acorde de Dó menor (Cm) é formado pelas notas: Dó (C), Mi♭ (E♭) e Sol (G).
                Compare com o acorde maior:
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Diferenças e Usos</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                • Acordes maiores geralmente soam mais "alegres" ou "brilhantes"
                <br/>
                • Acordes menores tendem a soar mais "tristes" ou "melancólicos"
                <br/>
                • A única diferença está na terça (maior ou menor)
                <br/>
                • A quinta justa permanece a mesma em ambos
                <br/><br/>
                Pratique alternando entre as versões maior e menor do mesmo acorde para perceber a diferença!
              </Text>
            </Box>
            <Box display="flex" justifyContent="center" padding="3rem">
              <Button backgroundColor="#0BCE83" paddingX="3rem" onClick={markAsCompleted}>Concluir</Button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export { C2 }; 
