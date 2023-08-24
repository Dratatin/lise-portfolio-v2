import HeaderDesktop from "../headerDesktop/headerDesktop"
import HeaderMobile from "../headerMobile/HeaderMobile"
import useAppState from "../../utils/themeContext"

import "./_header.scss";

const Header = () => {
    const { state } = useAppState()

    return(
        <header className="header">
            {state.deviceType === "desktop" ? 
                <HeaderDesktop />
            :
                <HeaderMobile />
            }
        </header>
    )
}

export default Header