import {ReactComponent as ArrowLeft} from '../../assets/slider-prev.svg'
import {ReactComponent as ArrowRight} from '../../assets/slider-next.svg'

import "./_sliderNavigation.scss";

const SliderNavigation = ({sliderNav, othersClass=''}) => {
    return (
        <div className={`slider-navigation ${othersClass}`}>
            <div className="slider-navigation__button" ref={sliderNav.prev}>
                <ArrowLeft />
            </div>
            <div className="slider-navigation__button" ref={sliderNav.next}>
                <ArrowRight />
            </div>
        </div>
    )
}

export default SliderNavigation