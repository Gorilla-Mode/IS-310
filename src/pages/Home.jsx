import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../hooks/useReveal'
import groupPhoto from '../assets/group-photo.jpg'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef   = useRef(null)
  const tagRef    = useRef(null)
  const titleRef  = useRef(null)
  const subRef    = useRef(null)
  const ctaRef    = useRef(null)
  const photoRef  = useRef(null)

  const aboutRef  = useReveal({ delay: 0.1 })
  const linksRef  = useReveal({ delay: 0.15 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
          .from(tagRef.current,   { y: 20, opacity: 0, duration: 0.7, delay: 0.2, clearProps: 'all' })
          .from(titleRef.current, { y: 50, opacity: 0, duration: 1.0, clearProps: 'all' }, '-=0.4')
          .from(subRef.current,   { y: 30, opacity: 0, duration: 0.8, clearProps: 'all' }, '-=0.6')
          .from(ctaRef.current,   { y: 20, opacity: 0, duration: 0.6, clearProps: 'all' }, '-=0.5')
          .from(photoRef.current, { x: 40, opacity: 0, duration: 1.0, clearProps: 'all' }, '-=0.8')
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
      <>
        <section className="hero" ref={heroRef}>
          <div className="container hero__inner">
            <div className="hero__content">
              <p className="hero__tag mono" ref={tagRef}>IS-310 | Bachelor 2027</p>
              <h1 className="hero__title" ref={titleRef}>
                Vi lærer ved<br />
                <span className="accent">å gjøre</span>
              </h1>
              <p className="hero__sub" ref={subRef}>
                En gruppe engarsjert gruppe IT-studenter ved UiA som er klare for et spennde bacherlorprosjekt!
              </p>
              <div className="hero__cta" ref={ctaRef}>
                <Link to="/om-oss" className="btn btn--primary">Introduksjons-video</Link>
                <Link to="/team"   className="btn btn--ghost">Møt teamet</Link>
              </div>
            </div>

            <div className="hero__image" ref={photoRef}>
              <div className="hero__photo-frame">
                <img
                    src={groupPhoto}
                    alt="Bachelor gruppen foran et luftambulanse-helikopter"
                    className="hero__photo-img"
                />
              </div>
              <p className="hero__photo-caption mono">IS-310 bachelorgruppen</p>
            </div>
          </div>
          <div className="hero__line" aria-hidden="true" />
        </section>

        <section className="home-about">
          <div className="container project-stack" ref={aboutRef}>
            <div className="project-copy">
              <p className="section-tag mono">Om prosjektet</p>
              <h2 className="section-title">Vi utforsker hvordan kartdata kan gjøre hverdagen enklere.</h2>
              <p className="section-body">
                I dette prosjektet undersøker vi hvordan moderne digitale løsninger kan støtte arbeid med kart,
                geodata og praktiske beslutninger. Målet er å kombinere faglig innsikt, brukervennlighet og
                konkrete case fra offentlige behov, slik at vi kan utvikle et relevant og anvendelig konsept.
              </p>
              <p className="section-body">
                Gjennom oppgaven får vi erfaring med forskning, samarbeidsarbeid og prototyping i praksis –
                samtidig som vi utforsker hvordan data kan gjøres mer tilgjengelig, forståelig og nyttig for
                mennesker i hverdagen.
              </p>
              <div className="project-actions">
                <Link to="/vart-praksisprosjekt" className="btn btn--primary">Se praksisprosjektet</Link>
              </div>
            </div>

            <div className="project-media" aria-label="Bildeplasser for prosjektet">
              <div className="project-placeholder">Bilde av gruppa</div>
              <div className="project-placeholder project-placeholder--alt">Bilde av helikopter</div>
            </div>
          </div>
        </section>

        <section className="home-links">
          <div className="container home-links__grid" ref={linksRef}>
            {[
              { to: '/vart-praksisprosjekt', label: 'Vårt praksisprosjekt', desc: 'Nyttige løsninger og case' },
              { to: '/om-oss', label: 'Om oss', desc: 'Hva vi holder på med' },
              { to: '/team',   label: 'Team',   desc: 'Møt gruppen' },
            ].map(({ to, label, desc }) => (
                <Link key={to} to={to} className="home-link-card">
                  <p className="home-link-card__label">{label}</p>
                  <p className="home-link-card__desc mono">{desc}</p>
                  <span className="home-link-card__arrow">→</span>
                </Link>
            ))}
          </div>
        </section>
      </>
  )
}