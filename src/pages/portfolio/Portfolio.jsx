// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'

import { useState, useEffect, useRef } from 'react'
import Card from '../../components/card/Card'
import SliderFilters from '../../components/sliderFilters/SliderFilters'
import Filters from '../../components/filters/Filters'
import SliderNavigation from '../../components/sliderNavigation/SliderNavigation'
import useTheme from "../../utils/themeContext"
import projects from "../../datas/projects.json"

// Import Swiper styles
import 'swiper/css'

import "./_portfolio.scss"

const Portfolio = () => {
    const { state } = useTheme()
    const sliderRef = useRef(null);
    const [activeProjects, setProjects] = useState(projects)

    useEffect(() => {
        let filteredProjects = projects
        if (state.portfolio.filter !== "all") {
            filteredProjects = projects.filter(project => project.tag.value === state.portfolio.filter)
        }
        setProjects(filteredProjects);
    }, [state.portfolio.filter])

    return(
        <div className='portfolio'>
            {state.deviceType === "mobile" ?
                <SliderFilters othersClass='portfolio__filters'/>
                : 
                <div className='portfolio__navigation'>
                    <Filters />
                    <SliderNavigation sliderRef={sliderRef}/>
                </div>
            }
            <Swiper
                slidesPerView={"auto"}
                freeMode={true}
                className='portfolio__slider'
                modules={[FreeMode]}
                ref={sliderRef}
                >
                {activeProjects.map((project, index) => (
                    <SwiperSlide 
                        key={`card-${state.portfolio.filter}-${project.id}`} 
                        className='portfolio__slider__item'
                        style={{animationDelay:`${0.2 * index}s`}}
                    >
                        <Card 
                            title={project.title}
                            tag={project.tag.label}
                            id={project.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Portfolio