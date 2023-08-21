import Container from "../container/Container";
import Menu from "../../components/menu/Menu";
import Socials from "../../components/socials/Socials";

import "./_header.scss";

const Header = ({onPortfolioPage}) => {
    return(
        <header className="header">
            <Container layoutType="big">
                <div className="header__content">
                    <div className="header__content__wrapper">
                        <Menu filterActive={onPortfolioPage}/>
                        <Socials />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header