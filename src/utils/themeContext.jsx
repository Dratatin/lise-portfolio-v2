import { createContext, useReducer, useContext } from "react"
import themeReducer from "./themeReducer"
import { initialState } from "./themeReducer"

const ThemeContext = createContext(initialState)

export const ThemeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(themeReducer, initialState)

    const setPortfolioFilter = (filter) => {
        dispatch({
            type: "SET_PORTFOLIO_FILTER",
            payload: filter
        })
    }

    const store = {
        state,
        setPortfolioFilter
    }
    return <ThemeContext.Provider value={store}> {children} </ThemeContext.Provider>
}

const useTheme = () => {
    const context = useContext(ThemeContext)
    return context
}

export default useTheme