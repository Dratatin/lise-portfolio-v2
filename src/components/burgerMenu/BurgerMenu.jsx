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
        </div>
    )
}

export default BurgerMenu