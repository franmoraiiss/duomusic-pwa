import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from "react-router";
import { Provider } from '@/components/ui/provider.tsx';

import { Login } from './pages/Login.tsx'
import { Welcome } from './pages/Welcome.tsx';
import { StudyPath } from './pages/StudyPath.tsx';
import { BasicMusicTheory } from './pages/StudyPaths/BasicMusicTheory.tsx';
import { PianoPlayground } from './pages/PianoPlayground.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/welcome' element={<Welcome />}/>
          <Route path='/study-path' element={<StudyPath />}/>
          <Route path='/basic-music-theory' element={<BasicMusicTheory />}/>
          <Route path='/piano-playground' element={<PianoPlayground />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
