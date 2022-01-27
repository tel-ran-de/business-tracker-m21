import {combineReducers} from "redux";

import {TaskReducer} from "./TaskReducer";

export const RootReducer = combineReducers({
    task: TaskReducer
})