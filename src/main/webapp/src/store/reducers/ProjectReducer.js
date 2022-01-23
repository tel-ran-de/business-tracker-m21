import {
    FETCH_PROJECTS,

} from "../actions";

const initState = {
    list: [],
    activeProject: null,
}

export const ProjectReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_PROJECTS:
            return {...state, list: payload}

        default:
            return state
    }
}