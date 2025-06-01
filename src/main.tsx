import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from "react-router";
import { Provider } from '@/components/ui/provider.tsx';

import { Login } from './pages/Login.tsx'
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

import { EarTraining } from './pages/StudyPaths/EarTraining/EarTraining.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
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

          <Route path='/ear-training' element={<EarTraining />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
