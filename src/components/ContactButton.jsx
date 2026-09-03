import { CONTACT_MAILTO } from '../data/contact'
import './ContactButton.css'

/**
 * Kontaktknappen finnes i to varianter:
 *   variant="nav"     → navbaren, siste element, teksten «Kontakt»
 *   variant="primary" → hero og samarbeid-seksjonen, «Ta kontakt»
 *
 * Den er en <a> med mailto, ikke en <button>, slik at høyreklikk,
 * «kopier e-postadresse» og tastaturnavigasjon fungerer som forventet.
 */
export default function ContactButton({
                                          variant = 'primary',
                                          children,
                                          className = '',
                                          onClick,
                                      }) {
    const label = children ?? (variant === 'nav' ? 'Kontakt' : 'Ta kontakt')

    return (
        <a
            className={[
                'btn-primary',
                variant === 'nav' ? 'btn-primary--nav' : '',
                className,
            ].filter(Boolean).join(' ')}
            href={CONTACT_MAILTO}
            onClick={onClick}
        >
            {label}
        </a>
    )
}

/**
 * Sekundærhandlinger er tekstlenker med pil — aldri fylte knapper.
 * Pilen er tegnet → i et eget span, ikke et ikonbibliotek.
 */
export function LinkArrow({ href, children, className = '', ...rest }) {
    return (
        <a href={href} className={`link-arrow ${className}`.trim()} {...rest}>
            <span>{children}</span>
            <span className="arrow" aria-hidden="true">→</span>
        </a>
    )
}