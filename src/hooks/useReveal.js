import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useReveal(options = {}) {
  const ref = useRef(null)

  /* Pakk ut opsjonene til skalarer før effekten. Kallstedene sender inn
     et nytt objektliteral ved hver render, så en avhengighet på selve
     objektet ville kjørt effekten på nytt hver gang. Tallene er stabile,
     og effekten kjører derfor fortsatt bare én gang. */
  const y        = options.y        ?? 60
  const duration = options.duration ?? 0.9
  const delay    = options.delay    ?? 0

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity:  0,
        duration,
        delay,
        ease:     'expo.out',
        clearProps: 'all',
        scrollTrigger: {
          trigger: el,
          start:   'top 90%',
          once:    true,
        },
      })
    }, el)

    return () => ctx.revert()
  }, [y, duration, delay])

  return ref
}