import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './styles.css'
import BOLibraries from './pages/libraries.tsx'
import Negen1 from './pages/libraries/negen1.tsx'
import Negen2 from './pages/libraries/negen2.tsx'
import Negen3 from './pages/libraries/negen3.tsx'
import Reclibs from './pages/reclibs.tsx'
import Obstruction from './pages/reclibs/obstruction.tsx'
import GRandWebsite from './pages/libraries/grand.tsx'
import ScrollOnRoute from './ScrollOnRoute.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
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

          <Route path='/reclibs'>
            <Route index element={<Reclibs />} />
            <Route path='obstruction' element={<Obstruction />} />
          </Route>
        </Routes>
      </ScrollOnRoute>
    </StrictMode>
  </BrowserRouter>,
)
