import {combineReducers} from "redux";
import {ProjectReducer} from "./ProjectReducer";
import {MemberReducer} from "./MemberReducer";
import {TaskReducer} from "./TaskReducer"
import {UserReducer} from "./UserReducer";
import {KpiReducer} from "./KpiReducer";


export const RootReducer = combineReducers({
    project: ProjectReducer,
    member: MemberReducer,
    task: TaskReducer,
    user: UserReducer,
    kpi: KpiReducer
})