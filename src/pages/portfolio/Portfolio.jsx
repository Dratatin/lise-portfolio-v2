// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode } from 'swiper/modules';

import Card from '../../components/card/Card';
import projects from "../../datas/projects.json";

// Import Swiper styles
import 'swiper/css';

import "./_portfolio.scss"

const Portfolio = () => {
    console.log(projects)
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
                {projects.map((project, index) => (
                    <SwiperSlide key={`project-${index}`} className='portfolio__slider__item'>
                        <Card 
                            title={project.title}
                            tag={project.tag}
                            id={project.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Portfolio