import "./_aboutDescription.scss"

const AboutDescription = ({othersClass=""}) => {
    return(
        <div className={`${othersClass} about-description`}>
            <h1 className="about-description__title">Lise <span>Denis</span></h1>
            <div className="about-description__content">
                <p>
                    Je suis directrice artistique junior et j'aime créer.
                    Découvrir de nouveaux univers et imaginer des visuels vibrants et impactants. Pour réaliser des graphismes qui ont du sens, je m’efforce d’exploiter au mieux les idées et d’explorer toutes les solutions qui s’offrent à nous.
                </p>
                <p>
                    Sensible aux thématiques éthiques et durables, je me plonge dans chaque nouveau projet avec enthousiasme, écoute et créativité !
                </p>
            </div>
        </div>
    )
}

export default AboutDescription