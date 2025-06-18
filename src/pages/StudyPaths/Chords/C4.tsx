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

const C4 = () => {
  const navigate = useNavigate();
  const { markLessonCompleted } = useProgress();
  const [page, setPage] = useState(1);

  const totalPages = 3;

  const markAsCompleted = async () => {
    await markLessonCompleted('c4');
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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">Aula 04: Aplicando em Músicas</Text>
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Exemplo 1: "Asa Branca"</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Vamos analisar a progressão de "Asa Branca":
                <br/><br/>
                Em Sol maior (G):
                <br/>
                • G (I) - "Quando olhei a terra ardendo"
                <br/>
                • C (IV) - "Qual fogueira de São João"
                <br/>
                • D (V) - "Eu perguntei a Deus do céu, ai"
                <br/>
                • G (I) - "Por que tamanha judiação"
                <br/><br/>
                Experimente tocar no piano:
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Exemplo 2: "Pais e Filhos"</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                Agora vamos ver "Pais e Filhos" (Legião Urbana):
                <br/><br/>
                Em Ré maior (D):
                <br/>
                • D (I) - "Estátuas e cofres"
                <br/>
                • Bm (vi) - "E paredes pintadas"
                <br/>
                • G (IV) - "Ninguém sabe o que aconteceu"
                <br/>
                • A (V) - "Ela se jogou da janela..."
                <br/><br/>
                Uma progressão I-vi-IV-V clássica!
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
              <Text fontWeight="bold" textAlign="center" fontSize="1.5rem" paddingY="1.5rem">Dicas para Tocar Músicas</Text>
              <Text textAlign="justify" fontSize="1.25rem" paddingX="2rem">
                • Identifique a tonalidade da música
                <br/>
                • Procure padrões de progressões que você já conhece
                <br/>
                • Pratique as mudanças de acordes isoladamente
                <br/>
                • Comece com músicas que usam 3-4 acordes
                <br/><br/>
                Agora você está pronto para o teste final!
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

export { C4 }; 
