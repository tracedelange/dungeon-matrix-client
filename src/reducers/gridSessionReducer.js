const initialState = {
    configuration: {
        width: 25,
        height: 25,
        scale: 50,
        gridVisible: false,
        characterDetails: true
    },
    map_characters:[]
}

const gridSessionReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_MAP_CHARACTERS":
            return {
                ...state,
                map_characters: [...action.payload]
            }
        case "UPDATE_CONFIGURATION":
            return {
                ...state,
                configuration: {
                    ...state.configuration,
                    ...action.payload
                }
            }

        case "SET_GRID":
            return {
                ...state
            }
        default:
            return state;
    }
}

export default gridSessionReducer