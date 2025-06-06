import { Box, Button, Icon, Text } from "@chakra-ui/react";
import { ChevronLeft, Play, Music } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Piano, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import SoundfontProvider from "@/providers/sound-provider";

const audioContext = new window.AudioContext();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

interface Note {
  key: number;
  duration: number;
}

// Ciranda Cirandinha in C Major
const song: Note[] = [
  { key: MidiNumbers.fromNote('C4'), duration: 500 }, // Ci-
  { key: MidiNumbers.fromNote('D4'), duration: 500 }, // ran-
  { key: MidiNumbers.fromNote('E4'), duration: 500 }, // da
  { key: MidiNumbers.fromNote('F4'), duration: 500 }, // ci-
  { key: MidiNumbers.fromNote('E4'), duration: 500 }, // ran-
  { key: MidiNumbers.fromNote('D4'), duration: 500 }, // di-
  { key: MidiNumbers.fromNote('C4'), duration: 1000 }, // nha
  { key: MidiNumbers.fromNote('E4'), duration: 500 }, // Va-
  { key: MidiNumbers.fromNote('F4'), duration: 500 }, // mos
  { key: MidiNumbers.fromNote('G4'), duration: 500 }, // to-
  { key: MidiNumbers.fromNote('A4'), duration: 500 }, // dos
  { key: MidiNumbers.fromNote('G4'), duration: 500 }, // ci-
  { key: MidiNumbers.fromNote('F4'), duration: 500 }, // ran-
  { key: MidiNumbers.fromNote('E4'), duration: 1000 }, // dar
  { key: MidiNumbers.fromNote('G4'), duration: 500 }, // Va-
  { key: MidiNumbers.fromNote('C5'), duration: 500 }, // mos
  { key: MidiNumbers.fromNote('G4'), duration: 500 }, // dar
  { key: MidiNumbers.fromNote('E4'), duration: 500 }, // a
  { key: MidiNumbers.fromNote('C4'), duration: 500 }, // vol-
  { key: MidiNumbers.fromNote('D4'), duration: 500 }, // ta
  { key: MidiNumbers.fromNote('E4'), duration: 500 }, // in-
  { key: MidiNumbers.fromNote('F4'), duration: 500 }, // tei-
  { key: MidiNumbers.fromNote('E4'), duration: 500 }, // ra
  { key: MidiNumbers.fromNote('D4'), duration: 500 }, // va-
  { key: MidiNumbers.fromNote('C4'), duration: 1000 }, // mos
  { key: MidiNumbers.fromNote('C4'), duration: 1000 }, // dar
];

interface SoundfontProviderProps {
  isLoading: boolean;
  playNote: (midiNumber: number) => void;
  stopNote: (midiNumber: number) => void;
}

const noteRange = {
  first: MidiNumbers.fromNote('C4'),
  last: MidiNumbers.fromNote('C5'),
};

const CirandaCirandinha = () => {
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentNoteIndex, setCurrentNoteIndex] = useState(-1);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [activeNotes, setActiveNotes] = useState<number[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);

  const playSong = async (playNote: (midiNumber: number) => void, stopNote: (midiNumber: number) => void) => {
    if (isPlaying) return;
    setIsPlaying(true);
    setCurrentNoteIndex(-1);

    let time = 0;
    for (let i = 0; i < song.length; i++) {
      const note = song[i];
      setTimeout(() => {
        playNote(note.key);
        setCurrentNoteIndex(i);
        setActiveNotes([note.key]);
        setTimeout(() => {
          stopNote(note.key);
          setActiveNotes([]);
        }, note.duration - 50);
      }, time);
      time += note.duration;
    }

    setTimeout(() => {
      setIsPlaying(false);
      setActiveNotes([]);
    }, time);
  };

  const handleNotePlay = (midiNumber: number) => {
    if (!isPracticeMode || isPlaying) return;

    const newSequence = [...userSequence, midiNumber];
    setUserSequence(newSequence);

    // Check if the sequence is correct
    const targetSequence = song.slice(0, newSequence.length).map(n => n.key);
    const isCorrect = targetSequence.every((note, i) => note === newSequence[i]);

    if (!isCorrect) {
      // Reset if wrong
      setUserSequence([]);
      return;
    }

    // Check if completed
    if (newSequence.length === song.length) {
      const completed = JSON.parse(localStorage.getItem('completedLessons') || '[]');
      if (!completed.includes('song4')) {
        completed.push('song4');
        localStorage.setItem('completedLessons', JSON.stringify(completed));
      }
      
      // Show success message
      setShowSuccess(true);
      
      // Navigate back after delay
      setTimeout(() => {
        navigate(-1);
      }, 3000);
    }
  };

  const startPractice = () => {
    setIsPracticeMode(true);
    setUserSequence([]);
  };

  return (
    <Box 
      backgroundColor="#F6F5F5"
      height="100vh"
      display="flex"
      flexDirection="column"
      position="relative"
    >
      {showSuccess && (
        <Box
          position="fixed"
          top="0"
          left="0"
          right="0"
          bottom="0"
          backgroundColor="rgba(0, 0, 0, 0.7)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="1001"
        >
          <Box
            backgroundColor="white"
            padding="2rem"
            borderRadius="lg"
            textAlign="center"
            maxWidth="90%"
            width="400px"
          >
            <Text fontSize="2xl" fontWeight="bold" color="#0BCE83" marginBottom="1rem">
              Parabéns! 🎉
            </Text>
            <Text fontSize="lg" color="#2D0C57">
              Você completou "Ciranda Cirandinha" com sucesso! 💃
            </Text>
          </Box>
        </Box>
      )}

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
        <Text fontSize="2rem" fontWeight="bold" color="#2D0C57" textAlign="center">
          Ciranda Cirandinha
        </Text>
      </Box>

      <Box flex="1" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <Box marginBottom="2rem">
          <Text fontSize="1.5rem" textAlign="center">
            {isPracticeMode ? "Sua vez! Repita a melodia" : "Ouça a melodia primeiro"}
          </Text>
        </Box>

        <Box
          width="100%"
          maxWidth="800px"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <SoundfontProvider
            instrumentName="acoustic_grand_piano"
            audioContext={audioContext}
            hostname={soundfontHostname}
            render={({ isLoading, playNote, stopNote }: SoundfontProviderProps) => (
              <>
                {!isPracticeMode && (
                  <Box marginBottom="2rem">
                    <Button
                      bg="#0BCE83"
                      color="white"
                      onClick={() => playSong(playNote, stopNote)}
                      disabled={isLoading || isPlaying}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Play size={20} />
                      {isPlaying ? "Tocando..." : "Tocar Melodia"}
                    </Button>
                  </Box>
                )}

                {!isPracticeMode && !isPlaying && currentNoteIndex >= 0 && (
                  <Box marginBottom="2rem">
                    <Button
                      bg="#0BCE83"
                      color="white"
                      onClick={startPractice}
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <Music size={20} />
                      Praticar
                    </Button>
                  </Box>
                )}

                {isPracticeMode && (
                  <Box marginBottom="2rem">
                    <Text fontSize="1.25rem" textAlign="center">
                      Notas corretas: {userSequence.length} / {song.length}
                    </Text>
                  </Box>
                )}

                <Box
                  width="100%"
                  height="200px"
                >
                  <Piano
                    noteRange={noteRange}
                    playNote={(midiNumber: number) => {
                      playNote(midiNumber);
                      handleNotePlay(midiNumber);
                      setActiveNotes([midiNumber]);
                    }}
                    stopNote={(midiNumber: number) => {
                      stopNote(midiNumber);
                      setActiveNotes(activeNotes.filter(note => note !== midiNumber));
                    }}
                    disabled={isLoading || (!isPracticeMode && !isPlaying)}
                    activeNotes={isPlaying ? activeNotes : activeNotes}
                    className="react-piano"
                  />
                </Box>
              </>
            )}
          />
        </Box>
      </Box>
    </Box>
  );
};

export { CirandaCirandinha }; 
