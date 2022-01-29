import {combineReducers} from "redux";
import {ProjectReducer} from "./ProjectReducer";
import {TaskReducer} from "./TaskReducer";
import {MemberReducer} from "./MemberReducer";


export const RootReducer = combineReducers({
    project: ProjectReducer,
    task: TaskReducer,
    member: MemberReducer
})