import './SocialLinks.css'

function LinkedInIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            focusable="false"
        >
            <path d="M6.94 8.5H3.56V19h3.38V8.5ZM5.25 3a1.96 1.96 0 1 0 0 3.92A1.96 1.96 0 0 0 5.25 3ZM20.44 13.23c0-3.16-1.69-4.63-3.94-4.63a3.4 3.4 0 0 0-3.08 1.69V8.5h-3.38V19h3.38v-5.2c0-1.37.26-2.7 1.96-2.7 1.68 0 1.7 1.57 1.7 2.79V19h3.38l-.02-5.77Z" />
        </svg>
    )
}

function GitHubIcon() {
    return (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="currentColor"
            focusable="false"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.63.07-.63 1 .08 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.93a9.3 9.3 0 0 1 2.5.34c1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.82 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
            />
        </svg>
    )
}

const SOCIAL_PLATFORMS = [
    {
        key: 'linkedin',
        label: 'LinkedIn',
        Icon: LinkedInIcon,
    },
    {
        key: 'github',
        label: 'GitHub',
        Icon: GitHubIcon,
    },
]

export default function SocialLinks({
                                        linkedin,
                                        github,
                                        variant = 'compact',
                                        label = 'Sosiale profiler',
                                    }) {
    const urls = { linkedin, github }
    const availableLinks = SOCIAL_PLATFORMS.filter(({ key }) => urls[key])

    if (availableLinks.length === 0) {
        return null
    }

    const stopCardNavigation = event => {
        event.stopPropagation()
    }

    return (
        <div
            className={`social-links social-links--${variant}`}
            role="group"
            aria-label={label}
        >
            {availableLinks.map(({ key, label: linkLabel, Icon }) => (
                <a
                    className="social-links__link"
                    href={urls[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={stopCardNavigation}
                    onKeyDown={stopCardNavigation}
                    key={key}
                >
                    <Icon />
                    <span>{linkLabel}</span>
                </a>
            ))}
        </div>
    )
}