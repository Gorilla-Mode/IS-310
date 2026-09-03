import { useEffect, useRef, useState } from 'react'
import { LEAD, TEAM_EMAILS } from '../data/contact'
import './Kontakt.css'

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
                <div className="kontakt__intro-text">
                    <h1>Ta kontakt om bacheloroppgaven</h1>
                    <p className="ingress kontakt__ingress">
                        Vi ser etter én bedrift eller organisasjon til bacheloroppgaven
                        januar til juni 2027.
                    </p>
                </div>
            </section>

            <div className="kontakt__content">
                <section className="kontakt__card-section">
                    <div className="kontakt__card">
                        <figure className="kontakt__group-visual">
                            <img
                                src={`${import.meta.env.BASE_URL}images/Gruppebilde-MUTEX.jpg`}
                                alt="Mutex-bachelorgruppen samlet foran et helikopter"
                            />
                            <figcaption className="kontakt__group-caption label-mono">
                                MUTEX · BACHELORGRUPPEN
                            </figcaption>
                        </figure>
                        <div className="kontakt__card-body">
                            <h2 className="kontakt__name">{LEAD.name}</h2>
                            <p className="kontakt__role meta-mono">{LEAD.role}</p>
                            <a className="kontakt__email" href={LEAD.mailto}>{LEAD.email}</a>
                            <div className="kontakt__actions">
                                <a className="btn btn--primary" href={LEAD.mailto}>
                                    Send e-post
                                </a>
                                <button className="btn btn--secondary kontakt__copy-action" type="button" onClick={copyEmail}>
                                    {copied ? 'Kopiert' : 'Kopier e-postadresse'}
                                </button>
                            </div>
                            <p className="visually-hidden" role="status" aria-live="polite" aria-atomic="true">
                                {copied ? 'E-postadressen er kopiert til utklippstavlen.' : ''}
                            </p>
                        </div>
                    </div>
                </section>

                <section className="kontakt__group">
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
        </div>
    )
}
