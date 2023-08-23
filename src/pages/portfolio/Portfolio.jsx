// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, FreeMode, Navigation } from 'swiper/modules'

import { useState, useEffect } from 'react'
import Card from '../../components/card/Card'
import Filters from '../../components/Filters/Filters'
import useTheme from "../../utils/themeContext"
import projects from "../../datas/projects.json"

// Import Swiper styles
import 'swiper/css'

import "./_portfolio.scss"

const Portfolio = ({sliderNavPrev, sliderNavNext}) => {
    const { state } = useTheme()
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
            {state.deviceType === "mobile" &&
                <Filters othersClass='portfolio__filters' />
            }
            <Swiper
                slidesPerView={"auto"}
                // mousewheel={{
                //     enabled: true,
                //     releaseOnEdges: true,
                //     sensitivity: 20,
                // }}
                freeMode={true}
                // direction={'horizontal'}
                className='portfolio__slider'
                navigation={{
                    prevEl: sliderNavPrev.current,
                    nextEl: sliderNavNext.current,
                }}
                onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = sliderNavPrev.current;
                    swiper.params.navigation.nextEl = sliderNavNext.current;
               }}
                modules={[Mousewheel, FreeMode, Navigation]}
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