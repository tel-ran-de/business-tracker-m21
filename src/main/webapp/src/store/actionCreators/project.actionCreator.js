import {
    FETCH_PROJECT_BY_ID

} from "../actions";

import {API_URL} from '../../components/constants/global'


export const getProjectById = projectId => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/projects/${projectId}`)
            if (res.status !== 200) {
                return console.log(data.message)
            }
            const data = await res.json()
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
