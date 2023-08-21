// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel, FreeMode } from 'swiper/modules'

import { useState, useEffect } from 'react'
import Card from '../../components/card/Card'
import useTheme from "../../utils/themeContext"
import projects from "../../datas/projects.json"

// Import Swiper styles
import 'swiper/css'

import "./_portfolio.scss"

const Portfolio = () => {
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
            <Swiper
                slidesPerView={"auto"}
                mousewheel={{
                    enabled: true,
                    releaseOnEdges: true,
                    sensitivity: 20,
                }}
                freeMode={true}
                direction={'horizontal'}
                className='portfolio__slider'
                modules={[Mousewheel, FreeMode]}
                >
                {activeProjects.map((project, index) => (
                    <SwiperSlide 
                        key={`card-${index}`} 
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