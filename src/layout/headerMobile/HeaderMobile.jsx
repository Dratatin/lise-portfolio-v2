import Container from "../container/Container"
import Profil from "../../components/profil/Profil"
import Tag from "../../components/tag/Tag"

import "./_headerMobile.scss";

const HeaderMobile = () => {
    return(
        <header className="header-mobile">
            <Container layoutType="big">
                <div className="header-mobile__content">
                    <a className="header-mobile__content__behance" href="#">
                        <Tag layoutType="circle" decorationType="fill">Be</Tag>
                    </a>
                    <Profil />
                    <span className="header-mobile__content__burger-menu">
                        menu burger
                    </span>
                </div>
            </Container>
        </header>
    )
}

export default HeaderMobile