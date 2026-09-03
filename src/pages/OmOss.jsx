import { useReveal } from '../hooks/useReveal'
import { projects } from '../data/projects'
import Projects from '../components/Projects'
import './Page.css'
import './OmOss.css'

export default function OmOss() {
  const headRef  = useReveal()
  const bodyRef  = useReveal({ delay: 0.1 })
  const videoRef = useReveal({ delay: 0.15 })

  return (
    <div className="page">
      <div className="container">

        <div className="page__header" ref={headRef}>
          <h1 className="page__title">Hvem er vi?</h1>
        </div>

        <div className="page__body" ref={bodyRef}>
          <p>
            Vi er en gruppe med fem engasjerte IT-studenter ved Universitetet i Agder. Her presenterer vi gruppen gjennom en kort introduksjonsvideo.
            Mer informasjon om hvert gruppemedlem finner du på Team-siden.
          </p>
        </div>

        {/*
          Video placeholder — bytt ut <div className="video-placeholder"> med:
          <video controls src="/videos/intro.mp4" className="video-embed" />
          eller en YouTube/Vimeo <iframe> når videoen er klar.
        */}
        <div className="video-wrap" ref={videoRef}>
          <video controls className="video-embed">
            <source src="https://github.com/Gorilla-Mode/IS-310/releases/download/Video/UIA_310_V2.mp4" type="video/mp4" />
            <div className="video-placeholder__icon" aria-hidden="true">
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="25" stroke="rgba(232,255,71,0.35)" strokeWidth="1.5"/>
                <path d="M21 18l16 8-16 8V18z" fill="rgba(232,255,71,0.75)"/>
              </svg>
            </div>
            <p className="video-placeholder__label mono">Introduksjonsvideo kommer</p>
          </video>
        </div>

        <div className="om-oss-projects">
          <Projects
            projects={projects}
            title="Tidligere prosjekter"
            subtitle="Et utvalg av prosjekter vi har jobbet med tidligere i studiet."
            delay={0.2}
          />
        </div>

      </div>
    </div>
  )
}
