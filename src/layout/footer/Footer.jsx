import Container from "../container/Container"
import Credits from "../../components/credits/Credits";
import Job from "../../components/job/Job";
import SliderNavigation from "../../components/sliderNavigation/SliderNavigation";
import "./_footer.scss";

const Footer = ({onPortfolioPage, sliderNav}) => {
    return (
        <footer className="footer">
            <Container layoutType="big">
                <div className="footer__content">
                    <Job />
                    {onPortfolioPage === true &&
                        <SliderNavigation sliderNav={sliderNav}/>
                    }
                    <Credits />
                </div>
            </Container>
        </footer>
    )
}

export default Footer