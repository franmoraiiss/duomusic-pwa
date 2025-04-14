import { useEffect, useState } from "react";
import { Box, Text } from "@chakra-ui/react"
import AudioContext from "../contexts/audio-context";
import autoCorrelate from "../helper/auto-correlate";
import {
  noteFromPitch,
} from "../helper/helpers";

const audioCtx = AudioContext.getAudioContext();
const analyserNode = AudioContext.getAnalyser();
const buflen = 2048;
var buf = new Float32Array(buflen);

const noteStrings = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

function TunerComponent() {
  const [source, setSource] = useState(null);
  const [pitchNote, setPitchNote] = useState("C");
  const [pitchScale, setPitchScale] = useState("4");
  const [pitch, setPitch] = useState("0 Hz");

  const updatePitch = (time) => {
    analyserNode.getFloatTimeDomainData(buf);
    var ac = autoCorrelate(buf, audioCtx.sampleRate);
    if (ac > -1) {
      let note = noteFromPitch(ac);
      let sym = noteStrings[note % 12];
      let scl = Math.floor(note / 12) - 1;
      setPitch(parseFloat(ac).toFixed(2) + " Hz");
      setPitchNote(sym);
      setPitchScale(scl);
    }
  };

  useEffect(() => {
    if (source != null) {
      source.connect(analyserNode);
    }
  }, [source]);

  setInterval(updatePitch, 1);

  const start = async () => {
    const input = await getMicInput();

    if (audioCtx.state === "suspended") {
      await audioCtx.resume();
    }
    setSource(audioCtx.createMediaStreamSource(input));
  };

  useEffect(() => { start(); }, [])

  const getMicInput = () => {
    return navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        autoGainControl: false,
        noiseSuppression: false,
        latency: 0,
      },
    });
  };

  return (
    <Box
      display="flex"
      height="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      background="#7203FF"
      color="#FFFFFF"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Text fontSize="8rem">
          {pitchNote}
        </Text>
        <Text fontSize="4rem">
          {pitchScale}
        </Text>
      </Box>
      <Box>
        <Text fontSize="2rem">{pitch}</Text>
      </Box>
    </Box>
  );
}

export default TunerComponent;
