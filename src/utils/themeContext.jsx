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

    const setDeviceType = (deviceType) => {
        dispatch({
            type: "SET_DEVICE_TYPE",
            payload: deviceType
        })
    }

    const store = {
        state,
        setPortfolioFilter,
        setDeviceType
    }
    return <ThemeContext.Provider value={store}> {children} </ThemeContext.Provider>
}

const useAppState = () => {
    const context = useContext(ThemeContext)
    return context
}

export default useAppState