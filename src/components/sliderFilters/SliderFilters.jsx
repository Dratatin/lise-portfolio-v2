import Filter from "../filter/Filter"
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import "./_sliderFilters.scss"

import projects from "../../datas/projects.json"

const getTags = () => {
    let tags = []
    projects.forEach(project => {
        tags.push(project.tag)
    });
    return [...new Set(tags)]
}

const SliderFilters = ({othersClass=""}) => {
    const tags = getTags()
    const allFilter = {
        'value': 'all',
        'label': 'tout'
    }

    tags.unshift(allFilter)

    return (
        <Swiper
            slidesPerView={"auto"}
            freeMode={true}
            className={`slider-filters ${othersClass}`}
            modules={[FreeMode]}
            >
            {tags.map((elem, index) => (
                <SwiperSlide key={`filter-${index}`} className="slider-filters__filter">
                    <Filter elem={elem} />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default SliderFilters