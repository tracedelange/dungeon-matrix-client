
const initialState = []

const sessionsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_CAMPAIGNS":
            return [...action.payload];
        default:
            return state;
    }
}

export default sessionsReducer