const initialState = {
    configuration: {
        width: 20,
        height: 20,
        scale: 50,
        gridVisible: false,
        characterDetails: true
    },
    dmTools: {
        active: false,
        selectedItem: null
    },
    map_characters:[],
    map_elements:[]
}

const gridSessionReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_MAP_ELEMENTS":
            return {
                ...state,
                map_characters: [...action.payload.map_characters],
                map_elements: [...action.payload.map_elements]
            }
        case "UPDATE_CONFIGURATION":
            return {
                ...state,
                configuration: {
                    ...state.configuration,
                    ...action.payload
                }
            }
        case 'SET_DM_TOOLS_ACTIVE':
            return {
                ...state,
                dmTools: {
                    ...state.dmTools,
                    active: action.payload
                }
            }
        case 'SET_SELECTED_ITEM':
            return {
                ...state,
                dmTools: {
                    ...state.dmTools,
                    selectedItem: action.payload
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