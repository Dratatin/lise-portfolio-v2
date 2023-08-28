import Tag from "../tag/Tag"
import useTheme from "../../utils/themeContext"


const Filter = ({elem}) => {
    const { state, setPortfolioFilter } = useTheme()

    const handleChange = (e) => {
        setPortfolioFilter(e.target.value)
    }

    return (
        <label>
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
    )
}

export default Filter