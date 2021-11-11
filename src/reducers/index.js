import { combineReducers } from "redux";
import sessionsReducer from './sessionsReducer'
import campaignsReducer from './campaignsReducer'
import gridSessionReducer from "./gridSessionReducer";

export default combineReducers({
    session: sessionsReducer,
    grid: gridSessionReducer,
    campaigns: campaignsReducer
})