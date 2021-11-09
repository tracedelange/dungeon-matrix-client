
const initialState = {
    campaignList: [],
    selectedCampaign: null,
    campaignLogs: []
}

const sessionsReducer = (state=initialState, action) => {

    switch(action.type) {
        case "SET_SELECTED_CAMPAIGN":
            return {
                ...state,
                selectedCampaign: {...action.payload}
            }
        case "ADD_NEW_CAMPAIGN":
            return {
                ...state,
                campaignList: [action.payload, ...state.campaignList]
            }
        case "SET_CAMPAIGNS":
            return {
                ...state,
                campaignList: [...action.payload]
            }
        case 'SET_MESSAGES':
            return {
                ...state,
                campaignLogs: [...action.payload]
            }
        case 'RESET_CAMPAIGN':
            return initialState
        default:
            return state;
    }
}

export default sessionsReducer