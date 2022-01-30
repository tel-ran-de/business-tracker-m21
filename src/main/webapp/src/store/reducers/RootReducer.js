import {combineReducers} from "redux";
import {ProjectReducer} from "./ProjectReducer";
import {MemberReducer} from "./MemberReducer";
import {TaskReducer} from "./TaskReducer"


export const RootReducer = combineReducers({
    project: ProjectReducer,
    member: MemberReducer,
    task: TaskReducer
})