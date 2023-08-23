import Tag from "../tag/Tag"
import useTheme from "../../utils/themeContext"

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
    const { state, setPortfolioFilter } = useTheme()

    const handleChange = (e) => {
        setPortfolioFilter(e.target.value)
    }

    return(
        <div className={`filters ${othersClass}`}>
                <label>
                    <Tag color="secondary" decorationType={`${state.portfolio.filter === allFilter.value ? 'fill' : 'border'}`}>
                        {allFilter.label}
                        <input 
                            type="radio" 
                            name="filter" 
                            value={allFilter.value}
                            checked={state.portfolio.filter === allFilter.value}
                            onChange={handleChange}
                        />
                    </Tag>
                </label>
            {tags.map((elem, index) => (
                <label key={`tag-${index}`}>
                    <Tag color="secondary" decorationType={`${state.portfolio.filter === elem.value ? 'fill' : 'border'}`}>
                        {elem.label}
                        <input 
                            type="radio" 
                            name="filter" 
                            value={elem.value} 
                            checked={state.portfolio.filter === elem.value}
                            onChange={handleChange}
                        />
                    </Tag>
                </label>
            ))}
        </div>
    )
}

export default Filters