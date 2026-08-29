import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReveal } from '../hooks/useReveal'
import './Home.css'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef   = useRef(null)
  const tagRef    = useRef(null)
  const titleRef  = useRef(null)
  const subRef    = useRef(null)
  const ctaRef    = useRef(null)

  const aboutRef  = useReveal({ delay: 0.1 })
  const linksRef  = useReveal({ delay: 0.15 })

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.timeline({ defaults: { ease: 'expo.out' } })
          .from(tagRef.current,   { y: 20, opacity: 0, duration: 0.7, delay: 0.2, clearProps: 'all' })
          .from(titleRef.current, { y: 50, opacity: 0, duration: 1.0, clearProps: 'all' }, '-=0.4')
          .from(subRef.current,   { y: 30, opacity: 0, duration: 0.8, clearProps: 'all' }, '-=0.6')
          .from(ctaRef.current,   { y: 20, opacity: 0, duration: 0.6, clearProps: 'all' }, '-=0.5')
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
                En engasjert gruppe IT-studenter ved UiA som er klare for et spennende bachelorprosjekt!
              </p>
              <div className="hero__cta" ref={ctaRef}>
                <Link to="/om-oss" className="btn btn--primary">Introduksjonsvideo</Link>
                <Link to="/team"   className="btn btn--ghost">Møt teamet</Link>
              </div>
            </div>

          </div>
          <div className="hero__line" aria-hidden="true" />
        </section>

        <section className="home-about">
          <div className="container" ref={aboutRef}>
            <p className="section-tag mono">Om bachelor</p>
            <h2 className="section-title">Hva er IS-310?</h2>
            <p className="section-body">
              IS-310 er et forberedende emne til bachelorprosjektet i informasjonssystemer. I løpet av semesteret
              skal vi inngå en samarbeidsavtale med en bedrift eller organisasjon.
            </p>
          </div>
        </section>

        <section className="home-links">
          <div className="container home-links__grid" ref={linksRef}>
            {[
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