import {
    FETCH_PROJECT_BY_ID,
    ADD_PROJECT,
    FETCH_ALL_PROJECTS
} from "../actions";

const initState = {
    list: [],
}

export const ProjectReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_PROJECT_BY_ID:
            return {...state, list: payload}
        case FETCH_ALL_PROJECTS:
            return {...state, list: payload}
        case ADD_PROJECT:
            return {...state, list: payload}
        default:
            return state
    }
}