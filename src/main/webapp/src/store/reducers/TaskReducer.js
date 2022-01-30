import {
    FETCH_ACTIVE_TASK_BY_PROJECT_ID,

} from "../actions";

const initState = {
    list: [],
    activeTasks: []
}

export const TaskReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_ACTIVE_TASK_BY_PROJECT_ID:
            return {...state, activeTasks: payload}
        default:
            return state
    }
}