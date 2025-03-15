import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './styles.css'
import BOLibraries from './pages/libraries.tsx'
import Negen1 from './pages/libraries/negen1.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/libraries' element={<BOLibraries />} />
        <Route path='/libraries/negen1' element={<Negen1 />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>,
)
