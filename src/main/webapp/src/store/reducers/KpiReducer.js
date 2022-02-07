import {
    FETCH_KPI_BY_PROJECT_ID

} from "../actions";

const initState = {
    list: [],
}

export const KpiReducer = (state = initState, {type, payload}) => {
    switch (type) {
        case FETCH_KPI_BY_PROJECT_ID:
            return {...state, list: payload}
        default:
            return state
    }
}