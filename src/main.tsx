import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from "react-router";
import { Provider } from '@/components/ui/provider.tsx';

import { Login } from './pages/Login.tsx'
import { Welcome } from './pages/Welcome.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/welcome' element={<Welcome />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
