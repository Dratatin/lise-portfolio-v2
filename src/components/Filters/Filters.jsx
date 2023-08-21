import { useState } from "react";
import Tag from "../tag/Tag";

import "./_filters.scss"

import projects from "../../datas/projects.json";

const getTags = () => {
    let tags = [];
    projects.forEach(project => {
        tags.push(project.tag)
    });
    return [...new Set(tags)]
}

const Filters = () => {
    const tags = getTags();
    const allFilter = {
        'value': 'all',
        'label': 'tout'
    }

    const [filter, setFilter] = useState(allFilter.value)

    const handleChange = (e) => {
        setFilter(e.target.value)
    }

    return(
        <div className="filters">
                <label>
                    <Tag color="secondary" decorationType={`${filter === allFilter.value ? 'fill' : 'border'}`}>
                        {allFilter.label}
                        <input 
                            type="radio" 
                            name="filter" 
                            value={allFilter.value}
                            checked={filter === allFilter.value}
                            onChange={handleChange}
                        />
                    </Tag>
                </label>
            {tags.map((elem, index) => (
                <label>
                    <Tag color="secondary" decorationType={`${filter === elem.value ? 'fill' : 'border'}`} key={`tag-${index}`}>
                        {elem.label}
                        <input 
                            type="radio" 
                            name="filter" 
                            value={elem.value} 
                            checked={filter === elem.value}
                            onChange={handleChange}
                        />
                    </Tag>
                </label>
            ))}
        </div>
    )
}

export default Filters