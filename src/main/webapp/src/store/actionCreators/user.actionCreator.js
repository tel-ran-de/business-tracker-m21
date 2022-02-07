import {
    FETCH_ALL_USERS,

} from "../actions";

import {API_URL} from '../../components/constants/global'

export const getAllUsers = () => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/users`)
            const data = await res.json()
            if (res.status !== 200) {
                return console.log(data.message)

            }
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