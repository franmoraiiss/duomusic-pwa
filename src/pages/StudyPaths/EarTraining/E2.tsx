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

const E2 = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = () => {
    const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
    if (!completed.includes('e2')) {
      completed.push('e2');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 02: Intervalos</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que são Intervalos?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Intervalos são as distâncias entre duas notas musicais. Eles são fundamentais para entender melodias e harmonias.
                <br/><br/>
                Os intervalos mais comuns são:
                <br/>
                • Segunda (2 notas vizinhas)
                <br/>
                • Terça (pula uma nota)
                <br/>
                • Quarta (pula duas notas)
                <br/>
                • Quinta (pula três notas)
                <br/>
                • Oitava (mesma nota, mais aguda/grave)
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
                1. Toque duas notas no piano abaixo
                <br/>
                2. Tente identificar o intervalo entre elas
                <br/>
                3. Comece com intervalos pequenos (segundas e terças)
                <br/>
                4. Gradualmente, pratique intervalos maiores
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
                • Use músicas conhecidas como referência:
                <br/>
                - "Parabéns" começa com uma terça maior
                <br/>
                - "Star Wars" começa com uma quinta justa
                <br/>
                - "Somewhere Over the Rainbow" começa com uma oitava
                <br/><br/>
                Pratique ouvindo e cantando os intervalos para melhor fixação.
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

export { E2 }; 
