import './BioHeader.css'
import { LinkedInIcon, GitHubIcon } from './TeamCard'
import { useReveal } from '../hooks/useReveal'


export default function BioHeader({ member }) {
    const ref = useReveal()

    return (
        <div className="bio-header" ref={ref}>
            <h1 className="bio-header__title">{member.name}</h1>

            <div className="bio-header__content">
                <div className="bio-header__image-wrapper">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="bio-header__image"
                        style={{ objectPosition: member.focal }}
                    />
                </div>

                <div className="bio-header__info">
                    <div className="bio-header__content-top">
                        <p className="bio-header__age">{member.age} år &middot; {member.hometown}</p>
                        <p className="bio-header__subtitle mono">{member.subtitle}</p>
                        <hr className={"bio-header-divider"}/>
                        <p className="bio-header__bio">{member.bio}</p>
                    </div>
                    <div className="bio-header__links">
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bio-header__link"
                        >
                            <LinkedInIcon />
                            LinkedIn
                            <span className="bio-header__link-arrow" aria-hidden="true">&rarr;</span>
                        </a>
                        <span className="bio-header__link-sep" aria-hidden="true" />
                        <a
                            href={member.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bio-header__link"
                        >
                            <GitHubIcon />
                            GitHub
                            <span className="bio-header__link-arrow" aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
            <hr className="bio-header-divider" />
        </div>

    )
}