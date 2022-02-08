import {
    FETCH_ACTIVE_TASK_BY_PROJECT_ID

} from "../actions";

import {API_URL} from '../../components/constants/global'

export const getActiveTaskByProjectId = projectId => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/tasks/project/${projectId}/active`)
            const data = await res.json()
            dispatch(fetchActiveTaskByProjectId(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchActiveTaskByProjectId = data => {
    return {
        type: FETCH_ACTIVE_TASK_BY_PROJECT_ID,
        payload:data
    }
}
