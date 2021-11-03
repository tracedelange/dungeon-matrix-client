import { combineReducers } from "redux";
import sessionsReducer from './sessionsReducer'
import campaignsReducer from './campaignsReducer'

export default combineReducers({
    session: sessionsReducer,
    campaigns: campaignsReducer
})