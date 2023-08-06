import { NavLink } from "react-router-dom"
import "./_nav.scss"

const Nav = () => {
    return(
        <nav className="nav">
            <NavLink to="/portfolio" className="nav__item" label="Projets">
                Projets
            </NavLink>
            <NavLink to="/about" className="nav__item" label="A propos">
                A propos
            </NavLink>
        </nav>
    )
}

export default Nav