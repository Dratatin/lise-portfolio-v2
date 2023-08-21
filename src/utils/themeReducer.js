export const initialState = {
    portfolio: {
        filter: "all",
    }
};

const themeReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_PORTFOLIO_FILTER":
            return {
                ...state,
                portfolio: {
                    ...state.portfolio,
                    filter: payload,
                }
            }
        default:
            throw new Error("no case for " + type)
    }
}

export default themeReducer