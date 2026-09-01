import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import './Samarbeid.css'

const COLLABORATION_POINTS = [
    {
        number: '01',
        title: 'En reell problemstilling',
        text: 'Dere har et konkret behov eller en utfordring som kan undersøkes og utvikles gjennom en bacheloroppgave.',
    },
    {
        number: '02',
        title: 'Tett samarbeid',
        text: 'Vi jobber i dialog med dere gjennom hele perioden og deler innsikt, retning og resultater underveis.',
    },
    {
        number: '03',
        title: 'Rom for utforsking',
        text: 'Oppgaven må gi rom for forskning, prototyping og utvikling av en løsning som skaper verdi i praksis.',
    },
]

export default function Samarbeid() {
    const sectionRef = useReveal({ delay: 0.1 })

    return (
        <section className="samarbeid">
            <div className="container samarbeid__inner" ref={sectionRef}>
                <div className="samarbeid__header grid-12">
                    <p className="samarbeid__eyebrow label-mono">
                        BACHELOROPPGAVE<br />2027
                    </p>

                    <div className="samarbeid__intro">
                        <h2 className="samarbeid__title">
                            Vi ser etter én bedrift til bacheloroppgaven
                        </h2>
                        <p className="samarbeid__body ingress">
                            Fra januar til juni 2027 skal vi utvikle en løsning på en reell
                            problemstilling. Vi ser etter en bedrift eller organisasjon som
                            vil utforske den sammen med oss.
                        </p>
                    </div>

                    <div className="samarbeid__action">
                        <Link to="/kontakt" className="btn btn--primary">
                            Ta kontakt
                        </Link>
                    </div>
                </div>

                <ol className="samarbeid__columns">
                    {COLLABORATION_POINTS.map(({ number, title, text }) => (
                        <li className="samarbeid__column" key={number}>
                            <p className="samarbeid__number label-mono">{number}</p>
                            <h3 className="samarbeid__column-title">{title}</h3>
                            <p className="samarbeid__column-text">{text}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    )
}