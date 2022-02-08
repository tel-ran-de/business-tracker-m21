import {
    FETCH_PROJECT_BY_ID,
    ADD_PROJECT
} from "../actions";

const initState = {
    list: [],
    activeProject: null
}

export const ProjectReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_PROJECT_BY_ID:
            return {...state, activeProject: payload}
        case ADD_PROJECT:
            return {...state, list: [...state.list, payload]}
        default:
            return state
    }
}