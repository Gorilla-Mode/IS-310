import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import Home        from './pages/Home'
import OmOss       from './pages/OmOss'
import Team        from './pages/Team'
import VartPraksisprosjekt from './pages/VartPraksisprosjekt'
import BioIver     from './pages/BioIver'
import BioTobias   from './pages/BioTobias'
import BioSivert   from './pages/BioSivert'
import BioEira     from './pages/BioEira'
import BioOda      from './pages/BioOda'

function RouterWrapper() {
  const location = useLocation()

  useEffect(() => {
    const className = 'page--kartverket'
    if (location && location.pathname === '/vart-praksisprosjekt') {
      document.body.classList.add(className)
    } else {
      document.body.classList.remove(className)
    }
    // cleanup not necessary — we remove on route changes
  }, [location])

  return (
    <Routes>
      <Route path="/"                     element={<Home />} />
      <Route path="/om-oss"               element={<OmOss />} />
      <Route path="/vart-praksisprosjekt" element={<VartPraksisprosjekt />} />
      <Route path="/team"                 element={<Team />} />
      <Route path="/team/1"               element={<BioIver />} />
      <Route path="/team/2"               element={<BioTobias />} />
      <Route path="/team/3"               element={<BioSivert />} />
      <Route path="/team/4"               element={<BioEira />} />
      <Route path="/team/5"               element={<BioOda />} />
    </Routes>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <main>
        <RouterWrapper />
      </main>
      <Footer />
    </HashRouter>
  )
}
