import React from 'react'
import {useDispatch} from "react-redux";
// import {removeProject} from "../../../store/actionCreators/project_actionCreators";

export default ({project}) => {

    const dispatch = useDispatch()

    const removeHandler = e => {
        e.preventDefault()
        // dispatch(removeProject(project.id))
    }

    return (
        <>
            <div className="col-9">{project.name}</div>
            <div className="col-3">
                <button
                    onClick={removeHandler}
                    className="btn btn-danger btn-sm"
                >Delete</button>
            </div>
        </>
    )
}