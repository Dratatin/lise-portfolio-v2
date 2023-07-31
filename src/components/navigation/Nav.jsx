import { Link } from "react-router-dom"
import "./_nav.scss"

const Nav = () => {
    return(
        <nav className="nav">
            <Link to="/portfolio">
                Projets
            </Link>
            <Link to="/about">
                A propos
            </Link>
        </nav>
    )
}

export default Nav