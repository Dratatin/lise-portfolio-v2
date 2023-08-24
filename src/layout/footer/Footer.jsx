import Container from "../container/Container"
import Credits from "../../components/credits/Credits"
import Job from "../../components/job/Job"
import SliderNavigation from "../../components/sliderNavigation/SliderNavigation"
import { useLocation } from "react-router-dom"
import useAppState from "../../utils/themeContext"

import "./_footer.scss";

const Footer = ({sliderRef}) => {
    const { pathname } = useLocation()
    const { state } = useAppState()

    return (
        <footer className="footer">
            <Container layoutType="big">
                <div className="footer__content">
                    <Job othersClass="footer__content__item"/>
                    {pathname === "/portfolio" && state.deviceType === "desktop" &&
                        <SliderNavigation 
                            othersClass="footer__content__item" 
                            sliderRef={sliderRef} 
                        />
                    }
                    <Credits othersClass="footer__content__item"/>
                </div>
            </Container>
        </footer>
    )
}

export default Footer