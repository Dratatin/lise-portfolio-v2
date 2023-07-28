import Container from "../container/Container"
import "./_footer.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <Container layoutType="big">
                <div className="footer__content">
                    Footer
                </div>
            </Container>
        </footer>
    )
}

export default Footer