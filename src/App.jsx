import { useEffect } from 'react'
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import './App.css'
import Navbar      from './components/Navbar'
import Footer      from './components/Footer'
import Home        from './pages/Home'
import OmOss       from './pages/OmOss'
import Team        from './pages/Team'
import BioIver     from './pages/BioIver'
import BioTobias   from './pages/BioTobias'
import BioSivert   from './pages/BioSivert'
import BioEira     from './pages/BioEira'
import BioOda      from './pages/BioOda'
import VartPraksisprosjekt from './pages/VartPraksisprosjekt'

function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return null
}

export default function App() {
    return (
        <HashRouter>
            <ScrollToTop />
            <Navbar />
            <main>
                <Routes>
                    <Route path="/"           element={<Home />} />
                    <Route path="/om-oss"     element={<OmOss />} />
                    <Route path="/vart-praksisprosjekt" element={<VartPraksisprosjekt />} />
                    <Route path="/team"       element={<Team />} />
                    <Route path="/team/1"     element={<BioIver />} />
                    <Route path="/team/2"     element={<BioTobias />} />
                    <Route path="/team/3"     element={<BioSivert />} />
                    <Route path="/team/4"     element={<BioEira />} />
                    <Route path="/team/5"     element={<BioOda />} />
                </Routes>
            </main>
            <Footer />
        </HashRouter>

)
}
