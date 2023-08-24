import { useState, useRef, useEffect } from "react"
import Container from "../container/Container"
import Profil from "../../components/profil/Profil"
import Tag from "../../components/tag/Tag"
import BurgerMenu from "../../components/burgerMenu/BurgerMenu"
import useAppState from "../../utils/themeContext"
import {ReactComponent as BurgerMenuIcon} from '../../assets/burger-menu-icon.svg'

import "./_headerMobile.scss"

const HeaderMobile = () => {
    const { state } = useAppState()
    const [menuOpen, setMenuOpen] = useState(false);
    const burgerMenuIconRef = useRef(null);
    const [burgerMenuPos, setBurgerMenuPos] = useState();


    useEffect(() => {
        const updateBurgerMenuPos = () => {
            const burgerMenuIconRect = burgerMenuIconRef.current.getBoundingClientRect();
            setBurgerMenuPos(burgerMenuIconRect);
        }

        const handleResize = () => {
            updateBurgerMenuPos()
        }

        if (burgerMenuIconRef !== null) {
            updateBurgerMenuPos()
        }

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };

    },[burgerMenuIconRef, state.deviceType])

    
    return(
        <header className="header-mobile">
            <Container layoutType="big">
                <div className="header-mobile__content">
                    <a className="header-mobile__content__behance" href="#">
                        <Tag layoutType="circle" decorationType="fill">Be</Tag>
                    </a>
                    <Profil />
                    <div className="header-mobile__content__burger-menu" >
                        <button ref={burgerMenuIconRef} onClick={() => setMenuOpen(true)} >
                            <BurgerMenuIcon />
                        </button>
                        {menuOpen === true &&
                            <BurgerMenu setMenuOpen={setMenuOpen} burgerMenuPos={burgerMenuPos}/>
                        }
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default HeaderMobile