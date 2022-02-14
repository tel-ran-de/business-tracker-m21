import {
    FETCH_PROJECT_BY_ID,
    FETCH_ALL_PROJECTS,
    ADD_PROJECT
} from "../actions";

import {API_URL} from '../lib/vars'

export const getAllProjects = () => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/projects/`)
            const data = await res.json()
            if (res.status !== 200) {
                return console.log(data.message)
            }
            dispatch(fetchAllProjects(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

export const getProjectById = projectId => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/projects/${projectId}`)
            const data = await res.json()
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
            dispatch(addProject(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchAllProjects = data => {
    return {
        type: FETCH_ALL_PROJECTS,
        payload: data
    }
}

const fetchProjectById = data => {
    return {
        type: FETCH_PROJECT_BY_ID,
        payload: data
    }
}

const addProject = data => {
    return {
        type: ADD_PROJECT,
        payload: data
    }
}
