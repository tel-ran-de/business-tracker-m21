import {
    FETCH_PROJECT_BY_ID,
    ADD_PROJECT
} from "../actions";

import {API_URL} from '../../components/constants/global'


export const getProjectById = projectId => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/projects/${projectId}`)
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


export const addNewProject = project => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/projects/`, {
                method: 'POST',
                body: JSON.stringify(project),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return console.log(data.message)
            }
            dispatch(addProject(data))
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

const addProject = data => {
    return {
        type: ADD_PROJECT,
        payload: data
    }
}
