import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from "react-router";
import { Provider } from '@/components/ui/provider.tsx';

import { Login } from './pages/Login.tsx'
import { CreateAccount } from './pages/CreateAccount.tsx'
import { Welcome } from './pages/Welcome.tsx';
import { StudyPath } from './pages/StudyPath.tsx';
import { PianoPlayground } from './pages/PianoPlayground.tsx';
import { Tuner } from './pages/Tuner.tsx';

// Basic Theory
import { BasicMusicTheory } from './pages/StudyPaths/BasicMusicTheory/BasicMusicTheory.tsx';
import { B1 } from './pages/StudyPaths/BasicMusicTheory/B1.tsx';
import { B2 } from './pages/StudyPaths/BasicMusicTheory/B2.tsx';
import { B3 } from './pages/StudyPaths/BasicMusicTheory/B3.tsx';
import { B4 } from './pages/StudyPaths/BasicMusicTheory/B4.tsx';
import { BTest } from './pages/StudyPaths/BasicMusicTheory/BTest.tsx';

// Chords
import { Chords } from './pages/StudyPaths/Chords/Chords.tsx';
import { C1 } from './pages/StudyPaths/Chords/C1.tsx';
import { C2 } from './pages/StudyPaths/Chords/C2.tsx';
import { C3 } from './pages/StudyPaths/Chords/C3.tsx';
import { C4 } from './pages/StudyPaths/Chords/C4.tsx';
import { CTest } from './pages/StudyPaths/Chords/CTest.tsx';

// Ear Training
import { EarTraining } from './pages/StudyPaths/EarTraining/EarTraining.tsx';
import { E1 } from './pages/StudyPaths/EarTraining/E1.tsx';
import { E2 } from './pages/StudyPaths/EarTraining/E2.tsx';
import { E3 } from './pages/StudyPaths/EarTraining/E3.tsx';
import { E4 } from './pages/StudyPaths/EarTraining/E4.tsx';
import { ETest } from './pages/StudyPaths/EarTraining/ETest.tsx';

// Rhythm
import { Rhythm } from './pages/StudyPaths/Rhythm/Rhythm.tsx';
import { R1 } from './pages/StudyPaths/Rhythm/R1.tsx';
import { R2 } from './pages/StudyPaths/Rhythm/R2.tsx';
import { R3 } from './pages/StudyPaths/Rhythm/R3.tsx';
import { R4 } from './pages/StudyPaths/Rhythm/R4.tsx';
import { RTest } from './pages/StudyPaths/Rhythm/RTest.tsx';

// Sheet Music
import { SheetMusic } from './pages/StudyPaths/SheetMusic/SheetMusic.tsx';
import { S1 } from './pages/StudyPaths/SheetMusic/S1.tsx';
import { S2 } from './pages/StudyPaths/SheetMusic/S2.tsx';
import { S3 } from './pages/StudyPaths/SheetMusic/S3.tsx';
import { S4 } from './pages/StudyPaths/SheetMusic/S4.tsx';
import { STest } from './pages/StudyPaths/SheetMusic/STest.tsx';

// Music Practice
import { MusicPractice } from './pages/StudyPaths/MusicPractice/MusicPractice.tsx';
import { Twinkle } from './pages/StudyPaths/MusicPractice/Twinkle.tsx';
import { ParabensVoce } from './pages/StudyPaths/MusicPractice/ParabensVoce.tsx';
import { AIExercise } from './pages/StudyPaths/AIExercise/AIExercise.tsx';
import { AITest } from './pages/StudyPaths/AIExercise/AITest.tsx';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/create-account' element={<CreateAccount />}/>
          <Route path='/welcome' element={<Welcome />}/>
          <Route path='/study-path' element={<StudyPath />}/>
          <Route path='/piano-playground' element={<PianoPlayground />}/>
          <Route path='/tuner' element={<Tuner />}/>

          <Route path='/basic-music-theory' element={<BasicMusicTheory />}/>
          <Route path='/basic-music-theory/01' element={<B1 />} />
          <Route path='/basic-music-theory/02' element={<B2 />} />
          <Route path='/basic-music-theory/03' element={<B3 />} />
          <Route path='/basic-music-theory/04' element={<B4 />} />
          <Route path='/basic-music-theory/test' element={<BTest />} />

          <Route path='/chords' element={<Chords />}/>
          <Route path='/chords/01' element={<C1 />} />
          <Route path='/chords/02' element={<C2 />} />
          <Route path='/chords/03' element={<C3 />} />
          <Route path='/chords/04' element={<C4 />} />
          <Route path='/chords/test' element={<CTest />} />

          <Route path='/ear-training' element={<EarTraining />} />
          <Route path='/ear-training/01' element={<E1 />} />
          <Route path='/ear-training/02' element={<E2 />} />
          <Route path='/ear-training/03' element={<E3 />} />
          <Route path='/ear-training/04' element={<E4 />} />
          <Route path='/ear-training/test' element={<ETest />} />

          <Route path='/rhythm' element={<Rhythm />} />
          <Route path='/rhythm/01' element={<R1 />} />
          <Route path='/rhythm/02' element={<R2 />} />
          <Route path='/rhythm/03' element={<R3 />} />
          <Route path='/rhythm/04' element={<R4 />} />
          <Route path='/rhythm/test' element={<RTest />} />

          <Route path='/sheet-music' element={<SheetMusic />} />
          <Route path='/sheet-music/01' element={<S1 />} />
          <Route path='/sheet-music/02' element={<S2 />} />
          <Route path='/sheet-music/03' element={<S3 />} />
          <Route path='/sheet-music/04' element={<S4 />} />
          <Route path='/sheet-music/test' element={<STest />} />

          <Route path='/music-practice' element={<MusicPractice />} />
          <Route path='/music-practice/twinkle' element={<Twinkle />} />
          <Route path='/music-practice/song2' element={<ParabensVoce />} />
          <Route path='/ai-exercise' element={<AIExercise />} />
          <Route path='/ai-exercise/test/:topicId' element={<AITest />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
