import {ReactComponent as ArrowLeft} from '../../assets/slider-prev.svg'
import {ReactComponent as ArrowRight} from '../../assets/slider-next.svg'

import "./_sliderNavigation.scss";

const SliderNavigation = ({sliderRef, othersClass=''}) => {
    return (
        <div className={`slider-navigation ${othersClass}`}>
            <ArrowLeft className="slider-navigation__button" onClick={() => sliderRef.current.swiper.slidePrev()}/>
            <ArrowRight className="slider-navigation__button" onClick={() => sliderRef.current.swiper.slideNext()}/>
        </div>
    )
}

export default SliderNavigation