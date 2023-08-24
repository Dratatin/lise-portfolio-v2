import Container from "../container/Container" 
import Menu from "../../components/menu/Menu"
import Socials from "../../components/socials/Socials"
import { useLocation } from "react-router-dom"

import "./_headerDesktop.scss"

const HeaderDesktop = () => {
    const { pathname } = useLocation()

    return( 
        <div className="header-desktop">
            <Container layoutType="big">
                <div className="header-desktop__content">
                    <Menu onPortfolioPage={pathname === "/portfolio"}/>
                    <Socials />
                </div>
            </Container>
        </div>
    )
}

export default HeaderDesktop