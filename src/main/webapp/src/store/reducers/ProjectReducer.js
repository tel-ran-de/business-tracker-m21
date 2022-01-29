import {
    FETCH_PROJECT_BY_ID,

} from "../actions";

const initState = {
    list: [],
}

export const ProjectReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_PROJECT_BY_ID:
            return {...state, list: payload}
        default:
            return state
    }
}