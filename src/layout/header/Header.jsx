import Container from "../container/Container"
import "./_header.scss";

const Header = () => {
    return(
        <header className="header">
            <Container layoutType="big">
                <div className="header__content">
                    Header
                </div>
            </Container>
        </header>
    )
}

export default Header