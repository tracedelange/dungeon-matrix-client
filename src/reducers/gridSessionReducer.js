const initialState = {
    configuration: {
        width: 50,
        height: 25,
        scale: 50
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
            
        case "SET_GRID":
            return {
                ...state
            }
        default:
            return state;
    }
}

export default gridSessionReducer