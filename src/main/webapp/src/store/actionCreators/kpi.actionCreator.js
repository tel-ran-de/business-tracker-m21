import {
    FETCH_KPI_BY_PROJECT_ID,

} from "../actions";

import {API_URL} from '../../components/constants/global'

export const getKpiByProjectId = projectId => {
    return async dispatch => {
        try {
            const res = await fetch(`${API_URL}/api/project/${projectId}/kpis`)
            const data = await res.json()
            dispatch(fetchKpiByProjectId(data))
        } catch (e) {
            console.log(e.message)
        }
    }
}

const fetchKpiByProjectId = data => {
    return {
        type: FETCH_KPI_BY_PROJECT_ID,
        payload:data
    }
}
