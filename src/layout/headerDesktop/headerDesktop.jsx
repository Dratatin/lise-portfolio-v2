import Container from "../container/Container" 
import Menu from "../../components/menu/Menu"
import Profil from "../../components/profil/Profil"
import Filters from "../../components/Filters/Filters"
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
                    {pathname === "/portfolio" &&
                        <Filters />
                    }
                </div>
            </div>
        </Container>
    )
}

export default HeaderDesktop