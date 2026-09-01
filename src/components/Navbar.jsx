import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { navLinks } from '../data/navLinks'
import './Navbar.css'

/** Sider med hero. Der ligger navbaren transparent over toppen. */
const HERO_PATHS = new Set(['/', '/vart-praksisprosjekt'])

/** Én terskel. Over den er navbaren eggskall, under er den transparent
 på hero-sider. Navbaren skjules aldri. */
const SCROLL_THRESHOLD = 80

const FOCUSABLE = 'a[href], button:not([disabled])'

export default function Navbar() {
  const { pathname } = useLocation()
  const [scrolled, setScrolled] = useState(false)

  /* Menyen huskes sammen med ruten den ble åpnet på, slik at et
     rutebytte lukker den uten en ekstra effekt-runde. */
  const [menu, setMenu] = useState({ open: false, path: pathname })
  const menuOpen = menu.open && menu.path === pathname

  const drawerRef = useRef(null)
  const burgerRef = useRef(null)

  const transparent = HERO_PATHS.has(pathname) && !scrolled

  /* Scroll-lytter: passiv, og throttlet med requestAnimationFrame. */
  useEffect(() => {
    let frame = null

    const read = () => {
      frame = null
      setScrolled(window.scrollY > SCROLL_THRESHOLD)
    }

    const onScroll = () => {
      if (frame === null) frame = window.requestAnimationFrame(read)
    }

    read()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame !== null) window.cancelAnimationFrame(frame)
    }
  }, [])

  const openMenu = () => setMenu({ open: true, path: pathname })
  const closeMenu = () => setMenu({ open: false, path: pathname })

  /* Åpen drawer: låst body, Escape lukker, fokus holdes inne i drawer,
     og fokus går tilbake til hamburgeren når den lukkes. */
  useEffect(() => {
    if (!menuOpen) return

    const drawer = drawerRef.current
    const burger = burgerRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    drawer?.querySelector(FOCUSABLE)?.focus()

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenu({ open: false, path: pathname })
        return
      }
      if (event.key !== 'Tab' || !drawer) return

      const items = Array.from(drawer.querySelectorAll(FOCUSABLE))
      if (items.length === 0) return

      const first = items[0]
      const last = items[items.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
      if (burger && document.body.contains(burger)) burger.focus()
    }
  }, [menuOpen, pathname])

  const linkClass = ({ isActive }) =>
      'navbar__link' + (isActive ? ' navbar__link--active' : '')

  const ctaClass = ({ isActive }) =>
      'navbar__contact-cta' + (isActive ? ' navbar__contact-cta--active' : '')

  const drawerLinkClass = ({ isActive }) =>
      'nav-drawer__link' + (isActive ? ' nav-drawer__link--active' : '')

  return (
      <header className={`navbar ${transparent ? 'navbar--transparent' : 'navbar--solid'}`}>
        <div className="navbar__inner">
          <NavLink to="/" end className="navbar__logo mutex-logo">
            MUTEX
          </NavLink>

          <nav className="navbar__nav" aria-label="Hovednavigasjon">
            <ul className="navbar__links">
              {navLinks.map(({ to, label, cta }) => (
                  <li key={to}>
                    <NavLink to={to} end={to === '/'} className={cta ? ctaClass : linkClass}>
                      {label}
                    </NavLink>
                  </li>
              ))}
            </ul>
          </nav>

          <button
              ref={burgerRef}
              type="button"
              className="navbar__burger"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Åpne meny"
              onClick={openMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>

        <div id="mobile-menu" className="nav-drawer" ref={drawerRef} hidden={!menuOpen}>
          <div className="nav-drawer__top">
            <button
                type="button"
                className="nav-drawer__close"
                aria-label="Lukk meny"
                onClick={closeMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>

          <nav className="nav-drawer__nav" aria-label="Mobilmeny">
            <ul className="nav-drawer__links">
              {navLinks.map(({ to, label }) => (
                  <li key={to}>
                    <NavLink
                        to={to}
                        end={to === '/'}
                        onClick={closeMenu}
                        className={drawerLinkClass}
                    >
                      {label}
                    </NavLink>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
  )
}