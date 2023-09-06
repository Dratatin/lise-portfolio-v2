import Tag from "../tag/Tag"
import useTheme from "../../utils/themeContext"


const Filter = ({elem}) => {
    const { state, setPortfolioFilter } = useTheme()

    const handleChange = (e) => {
        setPortfolioFilter(e.target.value)
    }

    return (
        <label>
            <Tag 
                firstcolor="light"
                secondcolor={`${state.portfolio.filter === elem.value ? 'primary' : 'transparent'}`}
                decorationType= "fill"
            >
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