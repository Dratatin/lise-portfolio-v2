import Container from "../container/Container";
import Menu from "../../components/menu/Menu";
import Socials from "../../components/socials/Socials";
import "./_header.scss";

const Header = () => {
    return(
        <header className="header">
            <Container layoutType="big">
                <div className="header__content">
                    <Menu />
                    <Socials />
                </div>
            </Container>
        </header>
    )
}

export default Header