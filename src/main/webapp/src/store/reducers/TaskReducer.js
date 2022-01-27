import {
    ADD_TASK,

} from "../actions";

const initState = {
    list: [],
}

export const TaskReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case ADD_TASK:
            return {...state, list: [...state.list, payload]}

        default:
            return state
    }
}