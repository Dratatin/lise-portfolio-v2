import "./_sliderNavigation.scss";

const SliderNavigation = ({sliderRef, othersClass=''}) => {
    return (
        <div className={`slider-navigation ${othersClass}`}>
            <div className="slider-navigation__button" onClick={() => sliderRef.current.swiper.slidePrev()}>
                Prev
            </div>
            <div className="slider-navigation__button" onClick={() => sliderRef.current.swiper.slideNext()}>
                Next
            </div>
        </div>
    )
}

export default SliderNavigation