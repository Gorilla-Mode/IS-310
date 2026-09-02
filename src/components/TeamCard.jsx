import React from 'react'
import './TeamCard.css'

export const LinkedInIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4v11H3v-11zm6.5 0h3.83v1.5a4.2 4.2 0 0 1 3.77-2.07c2.9 0 4.4 1.9 4.4 5.35V20.5h-4v-5.6c0-1.4-.03-3.2-2-3.2-2 0-2.3 1.55-2.3 3.1v5.7h-4v-11z"
        />
    </svg>
)

export const GitHubIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.73c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.93.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.99c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.92v2.79c0 .27.18.59.69.49A10.05 10.05 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
    </svg>
)

/* Hele kortet navigerer til profilsiden ved klikk. Lenkene nederst må
   stoppe klikket, ellers åpnes både den eksterne lenken og bio-siden. */
const stopCardClick = (event) => event.stopPropagation()

export default function TeamCard({ member }) {
    const {
        name, age, hometown, bio, roles = [], subtitle, hobbies = [],
        image, focal, linkedin, github,
    } = member

    return (
        <article className="team-card">
            <div className="team-card__img-wrap">
                {image
                    ? (
                        <img
                            src={image}
                            alt={name}
                            className="team-card__img"
                            style={{ objectPosition: focal }}
                        />
                    )
                    : <div className="team-card__img-placeholder" aria-hidden="true" />
                }
            </div>

            <div className="team-card__body">
                <div className="team-card__intro">
                    <h3 className="team-card__name">{name}</h3>

                    <p className="team-card__origin">{age} år, fra {hometown}.</p>

                    {/* Originalteksten fra teamMembers.js. Klippes kun visuelt av CSS. */}
                    <p className="team-card__desc">{bio}</p>
                </div>

                <div className="team-card__block team-card__block--ansvar">
                    <p className="team-card__label">Ansvar</p>
                    <ul className="team-card__tags">
                        {roles.map(role => (
                            <li className="team-card__tag" key={role}>{role}</li>
                        ))}
                    </ul>
                </div>

                <div className="team-card__divider" aria-hidden="true" />

                <div className="team-card__block team-card__block--studie">
                    <p className="team-card__label">Studie</p>
                    <p className="team-card__study">
                        {subtitle.split('\n').map((line, index, arr) => (
                            <React.Fragment key={line}>
                                {line}
                                {index < arr.length - 1 && <br />}
                            </React.Fragment>
                        ))}
                    </p>
                </div>

                <div className="team-card__block team-card__block--fritid">
                    <p className="team-card__label">Fritid</p>
                    <p className="team-card__interests">{hobbies.join(', ')}</p>
                </div>

                <div className="team-card__links">
                    {linkedin && (
                        <a
                            href={linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="team-card__link"
                            onClick={stopCardClick}
                        >
                            <LinkedInIcon />
                            LinkedIn
                        </a>
                    )}
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noreferrer"
                            className="team-card__link"
                            onClick={stopCardClick}
                        >
                            <GitHubIcon />
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}