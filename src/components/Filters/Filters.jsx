import Filter from "../filter/Filter"

import "./_filters.scss"

import projects from "../../datas/projects.json"

const getTags = () => {
    let tags = []
    projects.forEach(project => {
        tags.push(project.tag)
    });
    return [...new Set(tags)]
}

const Filters = ({othersClass=''}) => {
    const tags = getTags()
    const allFilter = {
        'value': 'all',
        'label': 'tout'
    }

    return(
        <div className={`filters ${othersClass}`}>
            <Filter elem={allFilter}/>
            {tags.map((elem, index) => (
                <Filter elem={elem} key={`tag-${index}`}/>
            ))}
        </div>
    )
}

export default Filters