import Nav from "../navigation/Nav";
import Socials from "../socials/Socials"

import "./_menu.scss"

const Menu = ({othersClass=""}) => {
    return(
        <div className={`menu ${othersClass}`}>
            <Nav />
            <Socials />
        </div>
    )
}

export default Menu