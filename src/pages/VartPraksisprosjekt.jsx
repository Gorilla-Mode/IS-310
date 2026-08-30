import { useEffect, useRef } from 'react'
import './VartPraksisprosjekt.css'
import gruppebilde from '../assets/gruppebilde.jpg'
import helibilde from '../assets/heli2.jpg'

export default function VartPraksisprosjekt() {
  const heroRef = useRef(null)

  useEffect(() => {
    const updateHeroScroll = () => {
      if (!heroRef.current) return

      const { height, top } = heroRef.current.getBoundingClientRect()
      const progress = Math.min(1, Math.max(0, (-top) / (height * 0.9)))
      heroRef.current.style.setProperty('--scroll-progress', progress.toFixed(3))
    }

    updateHeroScroll()
    window.addEventListener('scroll', updateHeroScroll, { passive: true })

    return () => window.removeEventListener('scroll', updateHeroScroll)
  }, [])

  return (
    <div className="kartverket-page">

      <main className="kartverket-page__main">
        <section className="kartverket-page__hero" ref={heroRef}>
          <img src={gruppebilde} alt="Gruppebilde" className="kartverket-page__hero-image" />

          <div className="kartverket-page__hero-inner">
            <p className="kartverket-page__eyebrow">Praksis hos Kartverket</p>
            <h1 className="kartverket-page__headline">Vårt praksisprosjekt</h1>
          </div>
        </section>

        <section className="kartverket-page__content">
          <div className="kartverket-page__task-box">
            <h2 className="kartverket-page__task-title">Om oppgaven</h2>
            <div className="kartverket-page__description">
              <p>
                Vi videreutvikler en løsning som gjør det enklere for piloter og flybesetning å melde inn luftfartshindre, som kraftlinjer, master og stolper, direkte i kart. Slike hindre kan være kritiske ved lavtflyging, spesielt for helikoptre i utrykning hos Norsk Luftambulanse, Luftforsvaret og Politiets helikoptertjeneste. Kartverket forvalter Nasjonalt register over luftfartshindre (NRL), og prosjektet bygger videre på arbeid fra et tidligere studentprosjekt.
              </p>
              <p>
                Målet er å utvikle en MVP av en webapplikasjon der brukere raskt kan registrere hindre som punkt eller linje i kart, legge ved bilder og kommentarer, og der løsningen fungerer godt på nettbrett også i krevende feltsituasjoner. Vi jobber med brukeropplevelse, kartløsninger, database og systemutvikling, i tett samarbeid med fagpersoner fra Kartverket og Norsk Luftambulanse.
              </p>
            </div>
          </div>

          <div className="kartverket-page__info-grid">
            <article className="kartverket-page__info-card kartverket-page__info-card--blue">
              <p className="kartverket-page__info-label">Hvor ofte er vi der?</p>
              <p className="kartverket-page__info-text">Vi er hos Kartverket 2 ganger i uka, og dette holder vi frem med gjennom hele høstsemesteret.</p>
              <span className="kartverket-page__tag">2×/uke · hele høstsemesteret</span>
            </article>

            <article className="kartverket-page__info-card kartverket-page__info-card--green">
              <p className="kartverket-page__info-label">Hva er målet?</p>
              <p className="kartverket-page__info-text">Målet er å utvikle en MVP av en webapplikasjon der brukere raskt kan registrere luftfartshindre som punkt eller linje i kart, legge ved bilder og kommentarer — med en løsning som fungerer godt på nettbrett også i krevende feltsituasjoner.</p>
              <span className="kartverket-page__tag">MVP · Kart · Felttest</span>
            </article>
          </div>

          <section className="kartverket-page__image-section">
            <img src={helibilde} alt="Bilde av helikopter" className="kartverket-page__image" />
            <p className="kartverket-page__image-caption">Luftfartshindre er spesielt kritiske ved lavtflyging med helikopter.</p>
          </section>

          <section className="kartverket-page__cta-box">
            <h2>Vil du vite mer?</h2>
            <p>Les mer om oss og prosjektet på 302-siden.</p>
            <a href="#" aria-label="Gå til 302-siden">Gå til 302-siden →</a>
          </section>
        </section>
      </main>

    </div>
  )
}
