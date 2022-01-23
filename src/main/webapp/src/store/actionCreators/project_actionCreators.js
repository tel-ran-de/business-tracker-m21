import {FETCH_PROJECTS} from "../actions";
import {URL} from '../vars'

export const getAllProjects = () => {


    return async dispatch => {
        try {
            const res = await fetch(`${URL}/projects`, {
                method: 'GET'
            });
            const data = await res.json()
            if (res.status !== 200) {
                return console.log( data.message )
            }
            dispatch(fetchAllProjects(data))
        } catch (e) {
            console.log( e.message )
        }
    }
}


const fetchAllProjects = data => {
    return {
        type: FETCH_PROJECTS,
        payload: data
    }
}

