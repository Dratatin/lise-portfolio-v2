import Profil from "../profil/Profil";
import Nav from "../navigation/Nav";
import Filters from "../Filters/Filters";

import "./_menu.scss"

const Menu = ({filterActive}) => {
    return(
        <div className="menu">
            <Profil />
            <div className="menu__cta-wrapper">
                <Nav />
                {filterActive &&
                    <Filters />
                }
            </div>
        </div>
    )
}

export default Menu