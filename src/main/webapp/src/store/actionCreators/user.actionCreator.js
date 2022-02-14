import {
    FETCH_ALL_USERS,

} from "../actions";

import {API_URL} from '../../store/lib/vars'

export const getAllUsers = () => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/users`)
            const data = await res.json()
            dispatch(fetchAllUsers(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchAllUsers = data => {
    return {
        type: FETCH_ALL_USERS,
        payload:data
    }
}