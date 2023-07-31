import Profil from "../profil/Profil";
import Nav from "../navigation/Nav";
import "./_menu.scss"

const Menu = () => {
    return(
        <div className="menu">
            <Profil />
            <div className="menu__cta-wrapper">
                <Nav />
            </div>
        </div>
    )
}

export default Menu