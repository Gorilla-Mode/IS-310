import { useNavigate } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import TeamCard from '../components/TeamCard'
import { teamMembers } from '../data/teamMembers'
import './Page.css'
import './Team.css'

export default function Team() {
    const navigate = useNavigate()
    const headRef = useReveal()
    const gridRef = useReveal({ delay: 0.1 })

    const openMember = id => navigate(`/team/${id}`)

    const handleCardKeyDown = (event, id) => {
        if (event.target !== event.currentTarget || event.key !== 'Enter') return
        event.preventDefault()
        openMember(id)
    }

    return (
        <div className="page">
            <div className="team-page">
                <div className="page__header" ref={headRef}>
                    <h1 className="page__title">Møt gruppen</h1>
                </div>
                <div className="team-grid" ref={gridRef}>
                    {teamMembers.map(m => (
                        <div
                            key={m.id}
                            className="team-card-wrapper"
                            role="link"
                            tabIndex={0}
                            aria-label={`Se profilen til ${m.name}`}
                            onClick={() => openMember(m.id)}
                            onKeyDown={event => handleCardKeyDown(event, m.id)}
                        >
                            <TeamCard member={m} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
