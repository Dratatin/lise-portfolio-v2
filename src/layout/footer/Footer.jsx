import Container from "../container/Container"
import Credits from "../../components/credits/Credits";
import Job from "../../components/job/Job";
import "./_footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container layoutType="big">
                <div className="footer__content">
                    <div className="footer__content__wrapper">
                        <Job />
                        <Credits />
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer