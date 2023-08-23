import Container from "../container/Container"
import Profil from "../../components/profil/Profil"

const HeaderMobile = () => {
    return(
        <header className="header">
            <Container layoutType="big">
                <div className="header__content">
                    <Profil />
                </div>
            </Container>
        </header>
    )
}

export default HeaderMobile