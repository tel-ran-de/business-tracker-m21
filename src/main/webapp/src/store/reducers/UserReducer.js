import {
    FETCH_ALL_USERS,
} from "../actions";

const initState = {
    list: [],
    activeUser: null,

}

export const UserReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_ALL_USERS:
            return {...state, list: payload}

        default:
            return state
    }
}