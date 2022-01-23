import {combineReducers} from "redux";
import {ProjectReducer} from "./reducers/ProjectReducer";

export const RootReducer = combineReducers({
    project: ProjectReducer,
})