const initialState = {
    configuration: {
        width: null,
        height: null,
        background_index: 0,
        tile_index: 0,
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
                configuration: {
                    ...state.configuration,
                    height: action.payload.height,
                    width: action.payload.width,
                    background_index: action.payload.background_index,
                    tile_index: action.payload.tile_index
                },
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