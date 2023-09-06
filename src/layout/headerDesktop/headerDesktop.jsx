import Profil from "../../components/profil/Profil"
import Job from "../../components/job/Job"
import Credits from "../../components/credits/Credits"
import Socials from "../../components/socials/Socials"
import Nav from "../../components/navigation/Nav"

import "./_headerDesktop.scss"

const HeaderDesktop = () => {
    return( 
        <div className="header-desktop">
            <Profil othersClass="header-desktop__wrapper"/>
            <div className="header-desktop__wrapper">
                <Nav />
            </div>
            <Socials />
            <div className="header-desktop__wrapper">
                <div>
                    <Job />
                    <Credits />
                </div>
            </div>
        </div>
    )
}

export default HeaderDesktop