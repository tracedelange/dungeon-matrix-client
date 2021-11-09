const initialState = {
    configuration: {
        width: 50,
        height: 25,
        scale: 50
    }
}

const gridSessionReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_GRID":
            return {
                ...state
            }
        default:
            return state;
    }
}

export default gridSessionReducer