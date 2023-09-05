import Container from "../container/Container" 
import Menu from "../../components/menu/Menu"
import Profil from "../../components/profil/Profil"
import { useLocation } from "react-router-dom"

import "./_headerDesktop.scss"

const HeaderDesktop = () => {
    const { pathname } = useLocation()

    return( 
        <Container layoutType="big">
            <div className="header-desktop">
                <Profil />
                <div className="header-desktop__content">
                    <Menu />
                </div>
            </div>
        </Container>
    )
}

export default HeaderDesktop