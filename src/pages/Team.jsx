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
                            onClick={() => navigate(`/team/${m.id}`)}
                        >
                            <TeamCard member={m} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}