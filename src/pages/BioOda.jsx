import { useNavigate } from 'react-router-dom'
import { teamMembers } from '../data/teamMembers'
import BioHeader from '../components/BioHeader'
import './Page.css'
import './BioPage.css'
import BioCategoryWrapper from "../components/BioCategoryWrapper.jsx";
import BioPageWrapper from '../components/BioPageWrapper'
import BioImageSection from "../components/BioImageSection.jsx";
import ImageCarousel from "../components/ImageCarousel.jsx";

export default function BioOda() {
    const navigate = useNavigate()
    const member = teamMembers.find(m => m.id === 5)

    const odaImages = [
        `${import.meta.env.BASE_URL}images/oda/IMG_0082.jpg`,
        `${import.meta.env.BASE_URL}images/oda/IMG_0868 (2).jpg`,
        `${import.meta.env.BASE_URL}images/oda/IMG_1396 (1).jpg`,
    ]

    if (!member) {
        return <div>Teammedlem ikke funnet</div>
    }

    return (
        <div className="page">
            <div className="container">
                <BioPageWrapper>
                    <button className="btn-back" onClick={() => navigate('/team')}>
                        ← Tilbake til teamet
                    </button>

                    <BioHeader member={member} />

                    <div className="bio-content">
                        <BioCategoryWrapper>
                            <BioImageSection
                                title="Om meg"
                                image={`${import.meta.env.BASE_URL}images/oda/IMG_0082.jpg`}
                            >
                                <p>
                                    Jeg har vært på utveksling i Sør-Korea i mitt fjerde semester, hvor jeg fikk oppleve et nytt skolesystem og en annerledes kultur. 
                                    Oppholdet ga meg muligheten til å bli kjent med nye mennesker, prøve ny mat og reise rundt i landet. Jeg reiste også alene til Vietnam,
                                    noe som utfordret meg og gjorde meg mer selvstendig og tryggere på egne valg.
                                </p>

                                <p>
                                    Jeg er en aktiv person som liker å sette meg mål og jobbe målrettet for å nå dem. 
                                    Jeg trener spesielt styrketrening og løping, og på fritiden liker jeg å spille golf med venner og familie. 
                                    Jeg er også glad i å lage mat og prøve nye oppskrifter.
                                </p>

                                <p>
                                    Jeg setter stor pris på menneskene rundt meg, og venner og familie er en viktig del av livet mitt. 
                                    Samtidig er jeg eventyrlysten og liker å utforske nye steder og oppleve nye ting. 
                                    Utvekslingsoppholdet i Sør-Korea ble derfor en lærerik og utviklende erfaring som utfordret meg både personlig og faglig.
                                </p>
                            </BioImageSection>

                            <BioImageSection title="Bilder">
                                <p>
                                    Litt bilder fra oppholdet i Korea
                                </p>
                                <ImageCarousel images={odaImages} title="Oda" />
                            </BioImageSection>
                            <br />
                        </BioCategoryWrapper>
                    </div>
                </BioPageWrapper>
            </div>
        </div>
    )
}