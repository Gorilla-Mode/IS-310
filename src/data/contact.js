const LEAD_EMAIL = 'iverk@uia.no'

export const MAIL_SUBJECT = 'Bacheloroppgave IS-310 2027'

const buildMailto = (email) =>
    `mailto:${email}?subject=${encodeURIComponent(MAIL_SUBJECT)}`

export const LEAD = {
    name: 'Iver Kroken',
    role: 'Gruppeleder / kontaktperson',
    email: LEAD_EMAIL,
    mailto: buildMailto(LEAD_EMAIL),
    portrait: `${import.meta.env.BASE_URL}images/iver.jpg`,
    linkedin: '<TODO>',
}

export const TEAM_EMAILS = [
    { name: 'Iver Kroken', email: LEAD.email, mailto: LEAD.mailto },
    { name: 'Tobias Olsen Nodland', email: 'tobiason@uia.no', mailto: buildMailto('tobiason@uia.no') },
    { name: 'Sivert Svanes Sæstad', email: 'sivertss@uia.no', mailto: buildMailto('sivertss@uia.no') },
    { name: 'Eira Bitnes Vikestøl', email: 'eirabv@student.uia.no', mailto: buildMailto('eirabv@student.uia.no') },
    { name: 'Oda Elise Aanestad', email: 'odaea@uia.no', mailto: buildMailto('odaea@uia.no') },
]

export const CONTACT_EMAIL = LEAD.email
export const CONTACT_MAILTO = LEAD.mailto
