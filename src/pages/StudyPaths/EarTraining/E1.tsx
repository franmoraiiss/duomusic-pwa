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

const E1 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('e1');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 01: Reconhecimento de Notas</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">O que é Reconhecimento de Notas?</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                O reconhecimento de notas é a habilidade de identificar uma nota musical apenas pelo som. É uma das habilidades mais fundamentais para desenvolver um bom ouvido musical.
                <br/><br/>
                Nesta aula, vamos aprender a reconhecer as notas básicas do piano.
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
                1. Toque uma nota no piano abaixo
                <br/>
                2. Tente cantar a nota que você tocou
                <br/>
                3. Toque a nota novamente para verificar se você cantou corretamente
                <br/><br/>
                Comece com notas próximas e vá aumentando a distância conforme se sentir confortável.
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
                • Comece com notas do meio do piano (região central)
                <br/>
                • Pratique regularmente, mesmo que por poucos minutos
                <br/>
                • Use referências de músicas que você conhece
                <br/>
                • Não tenha medo de errar - é parte do processo!
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

export { E1 }; 
