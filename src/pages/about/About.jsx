import AboutDescription from "../../components/aboutDescription/AboutDescription"
import AboutAvatar from "../../components/aboutAvatar/AboutAvatar"
import Container from "../../layout/container/Container"
import "./_about.scss"

const About = () => {
    return(
        <Container layoutType="big">
            <div className="about">
                <AboutAvatar othersClass="about__avatar"/>
                <AboutDescription othersClass="about__description"/>
            </div>
        </Container>
    )
}

export default About