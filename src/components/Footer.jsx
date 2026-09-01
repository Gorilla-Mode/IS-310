import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/navLinks'
import { TEAM_EMAILS } from '../data/contact'
import './Footer.css'

const GITHUB_URL = 'https://github.com/Gorilla-Mode/IS-310'
const IS_302_URL = 'https://iverkroken.github.io/IS-302/'

export default function Footer() {
  return (
      <footer className="footer">
        <div className="footer__grid">
          <div className="footer__col footer__col--brand">
            <span className="mutex-logo footer__logo">MUTEX</span>
            <p className="footer__meta">
              Bachelorprosjekt IS-310 · Januar til juni 2027
            </p>
          </div>

          <div className="footer__col">
            <h2 className="footer__title label-mono">SIDER</h2>
            <nav className="footer__links" aria-label="Bunnavigasjon">
              {navLinks.map(({ to, label }) => (
                  <NavLink key={to} to={to} end={to === '/'} className="footer__link">
                    {label}
                  </NavLink>
              ))}
            </nav>
          </div>

          <div className="footer__col">
            <h2 className="footer__title label-mono">KONTAKT</h2>
            <ul className="footer__contacts">
              {TEAM_EMAILS.map(({ name, email, mailto }) => (
                  <li className="footer__contact" key={name}>
                    <span className="footer__contact-name">{name}</span>
                    <a className="footer__contact-email" href={mailto}>
                      {email}
                    </a>
                  </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h2 className="footer__title label-mono">PERIODE</h2>
            <p className="footer__period">
              Januar til<br />
              juni 2027
            </p>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>Universitetet i Agder · IS-310, 2026/27</p>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href={IS_302_URL} target="_blank" rel="noopener noreferrer">
              Tidligere prosjektside, IS-302
            </a>
          </div>
          <p className="footer__place">Kristiansand, Norge</p>
        </div>
      </footer>
  )
}