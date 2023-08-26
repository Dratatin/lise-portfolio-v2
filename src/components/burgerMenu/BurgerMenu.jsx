import { NavLink } from "react-router-dom"
import Socials from "../socials/Socials"
import {ReactComponent as Star} from '../../assets/star.svg'
import {ReactComponent as BurgerCloseIcon} from '../../assets/burger-menu-close.svg'

import "./_burgerMenu.scss"

const BurgerMenu = ({setMenuOpen, burgerMenuPos}) => {

    return(
        <div className="burger-menu">
            <button style={{
                position: "absolute",
                top: burgerMenuPos.top,
                left: burgerMenuPos.left
            }}>
                <BurgerCloseIcon onClick={() => setMenuOpen(false)}/>
            </button>
            <Star className="burger-menu__star burger-menu__star--secondary"/>
            <nav className="burger-menu__nav">
                <NavLink to="/portfolio" className="burger-menu__nav__item" label="Projets" onClick={() => setMenuOpen(false)}>
                    Projets
                </NavLink>
                <NavLink to="/about" className="burger-menu__nav__item" label="A propos" onClick={() => setMenuOpen(false)}>
                    A propos
                </NavLink>
            </nav>
            <Star className="burger-menu__star burger-menu__star--quaternary"/>
            <Socials color={"white"}/>
        </div>
    )
}

export default BurgerMenu