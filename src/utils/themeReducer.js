export const initialState = {
    portfolio: {
        filter: "all",
        deviceType: window.matchMedia('(max-width: 768px)').matches ? 'mobile' : 'desktop'
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
        case "SET_DEVICE_TYPE":
            return {
                ...state,
                deviceType: payload
            }
        default:
            throw new Error("no case for " + type)
    }
}

export default themeReducer