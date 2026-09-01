import { useEffect, useRef, useState } from 'react'
import { LEAD, TEAM_EMAILS } from '../data/contact'
import './Kontakt.css'

const STEPS = [
    { number: '01', text: 'Du sender en kort e-post om hva dere jobber med.' },
    { number: '02', text: 'Vi tar en uforpliktende prat, digitalt eller hos dere.' },
    { number: '03', text: 'Vi lander en avtale i god tid før januar 2027.' },
]

const FACTS = [
    { label: 'PERIODE', value: 'Januar til juni 2027' },
    { label: 'GRUPPE', value: 'Fem studenter, IT og informasjonssystemer, UiA' },
    { label: 'STED', value: 'Kristiansand. Vi reiser gjerne, og jobber også digitalt' },
    { label: 'OMFANG', value: 'Bacheloroppgave, rundt 20 uker' },
]

export default function Kontakt() {
    const [copied, setCopied] = useState(false)
    const timerRef = useRef(null)

    useEffect(() => {
        return () => {
            if (timerRef.current !== null) {
                window.clearTimeout(timerRef.current)
            }
        }
    }, [])

    const clearCopyTimer = () => {
        if (timerRef.current !== null) {
            window.clearTimeout(timerRef.current)
            timerRef.current = null
        }
    }

    const copyEmail = async () => {
        clearCopyTimer()

        if (!navigator.clipboard?.writeText) {
            setCopied(false)
            return
        }

        try {
            await navigator.clipboard.writeText(LEAD.email)
            setCopied(true)
            timerRef.current = window.setTimeout(() => {
                setCopied(false)
                timerRef.current = null
            }, 2000)
        } catch {
            setCopied(false)
        }
    }

    return (
        <div className="kontakt">
            <section className="kontakt__intro grid-12">
                <p className="kontakt__eyebrow label-mono">
                    05 /<br />KONTAKT
                </p>
                <div className="kontakt__intro-text">
                    <h1>Ta kontakt om bacheloroppgaven</h1>
                    <p className="ingress kontakt__ingress">
                        Vi ser etter én bedrift eller organisasjon til bacheloroppgaven
                        januar til juni 2027. En kort prat holder for å komme i gang.
                    </p>
                </div>
            </section>

            <section className="kontakt__card-section">
                <div className="kontakt__card">
                    <div className="kontakt__portrait">
                        <img src={LEAD.portrait} alt={LEAD.name} />
                    </div>
                    <div className="kontakt__card-body">
                        <h2 className="kontakt__name">{LEAD.name}</h2>
                        <p className="kontakt__role meta-mono">{LEAD.role}</p>
                        <p className="kontakt__email">{LEAD.email}</p>
                        <div className="kontakt__actions">
                            <a className="btn btn--primary" href={LEAD.mailto}>
                                Send e-post
                            </a>
                            <button className="btn btn--secondary" type="button" onClick={copyEmail}>
                                {copied ? 'Kopiert' : 'Kopier e-postadresse'}
                            </button>
                        </div>
                        <p className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
                            {copied ? 'E-postadressen er kopiert til utklippstavlen.' : ''}
                        </p>
                    </div>
                </div>
            </section>

            <section className="kontakt__process grid-12">
                <div className="kontakt__process-head">
                    <span className="kontakt__bar" aria-hidden="true" />
                    <p className="kontakt__process-label label-mono">PROSESSEN</p>
                    <h2 className="kontakt__process-title">Slik går vi frem</h2>
                </div>
                <ol className="kontakt__steps">
                    {STEPS.map(({ number, text }) => (
                        <li className="kontakt__step" key={number}>
                            <p className="kontakt__step-number label-mono">{number}</p>
                            <p className="kontakt__step-text">{text}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="kontakt__facts-section">
                <dl className="kontakt__facts">
                    {FACTS.map(({ label, value }) => (
                        <div className="kontakt__fact" key={label}>
                            <dt className="kontakt__fact-label label-mono">{label}</dt>
                            <dd className="kontakt__fact-value">{value}</dd>
                        </div>
                    ))}
                </dl>
            </section>

            <section className="kontakt__group grid-12">
                <p className="kontakt__group-label label-mono">HELE GRUPPEN</p>
                <ul className="kontakt__group-list">
                    {TEAM_EMAILS.map(({ name, email }) => (
                        <li className="kontakt__group-row" key={name}>
                            <span className="kontakt__group-name">{name}</span>
                            <span className="kontakt__group-email">{email}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}