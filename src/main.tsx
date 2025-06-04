import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './styles.css'
import BOLibraries from './pages/libraries.tsx'
import Negen1 from './pages/libraries/negen1.tsx'
import Negen2 from './pages/libraries/negen2.tsx'
import Negen3 from './pages/libraries/negen3.tsx'
import Bos from './pages/bos.tsx'
import Obstruction from './pages/bos/obstruction.tsx'
import GRandWebsite from './pages/libraries/grand.tsx'
import ScrollOnRoute from './ScrollOnRoute.tsx'
import BOPrograms from './pages/programs.tsx'
import OroFilesystem from './pages/bos/orofilesystem.tsx'
import Gamut from './pages/bos/gamut.tsx'

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <StrictMode>
      <ScrollOnRoute>
        <Routes>
          <Route path='/' element={<App />} />

          <Route path='/libraries'>
            <Route index element={<BOLibraries />} />
            <Route path='negen1' element={<Negen1 />} />
            <Route path='negen2' element={<Negen2 />} />
            <Route path='negen3' element={<Negen3 />} />

            <Route path='grand' element={<GRandWebsite />} />
          </Route>

          <Route path='/programs'>
            <Route index element={< BOPrograms/>} />
          </Route>

          <Route path='/bos'>
            <Route index element={<Bos />} />
            <Route path='obstruction' element={<Obstruction />} />
            <Route path='oro-fs' element={<OroFilesystem />} />
            <Route path='gamut' element={<Gamut />} />
          </Route>
        </Routes>
      </ScrollOnRoute>
    </StrictMode>
  </HashRouter>,
)
