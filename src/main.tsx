import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from "react-router";
import { Provider } from '@/components/ui/provider.tsx';

import { App } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)
