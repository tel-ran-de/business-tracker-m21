import {
    ADD_TASK,

} from "../actions";

import {URL} from '../vars'

export const addNewTask = task => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/tasks`, {
                method: 'POST',
                body: JSON.stringify(task),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
            if (res.status !== 200) {
                return console.log(data.message)
            }
            dispatch(addTask(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const addTask = task => {
    return {
        type: ADD_TASK,
        payload: task
    }
}