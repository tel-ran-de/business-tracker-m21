import {combineReducers} from "redux";
import {ProjectReducer} from "./ProjectReducer";
import {MemberReducer} from "./MemberReducer";


export const RootReducer = combineReducers({
    project: ProjectReducer,
    member: MemberReducer
})
