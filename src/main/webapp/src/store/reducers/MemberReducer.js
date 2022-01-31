import {
    FETCH_MEMBER_BY_PROJECT_ID,

} from "../actions";

const initState = {
    list: [],
}

export const MemberReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_MEMBER_BY_PROJECT_ID:
            return {...state, list: payload}
        default:
            return state
    }
}