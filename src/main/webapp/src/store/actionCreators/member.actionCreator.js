import {
    FETCH_MEMBER_BY_PROJECT_ID

} from "../actions";

import {URL} from '../vars'

export const getMemberByProjectId = projectId => {
    return async dispatch => {
        try {
            const res = await fetch(`${URL}/members/project/${projectId}`)
            const data = await res.json()
            if (res.status !== 200) {
                return console.log(data.message)
            }
            dispatch(fetchMemberByProjectId(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchMemberByProjectId = data => {
    return {
        type: FETCH_MEMBER_BY_PROJECT_ID,
        payload:data
    }
}