import {
    FETCH_PROJECT_BY_ID

} from "../actions";

import {URL} from '../vars'

export const getProjectById = projectId => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/projects/${projectId}`)
            const data = await res.json()
            if (res.status !== 200) {
                return console.log(data.message)
            }
            dispatch(fetchProjectById(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchProjectById = data => {
    return {
        type: FETCH_PROJECT_BY_ID,
        payload:data
    }
}