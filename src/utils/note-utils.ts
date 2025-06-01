const noteStrings = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

export const midiNumberToNoteName = (midiNumber: number): string => {
  const noteIndex = (midiNumber - 12) % 12;
  const octave = Math.floor((midiNumber - 12) / 12);
  return `${noteStrings[noteIndex]}${octave}`;
}; 
