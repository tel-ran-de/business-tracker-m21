import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {getAllProjects} from "../../../store/actionCreators/project_actionCreators";
import ProjectItem from "./ProjectItem"

export default props => {

    const dispatch = useDispatch()
    const projects = useSelector(state => state.project.list)

    useEffect(() => {
        dispatch(getAllProjects())
    }, [])

    console.log(projects)

    const renderProjectList = () => {
        return !projects.length
            ? (<p className="alert alert-warning">No Projects registered</p>)
            : projects.map(p => <ProjectItem key={p.id} project={p} />)
    }

    return (
        <div className="row">
            <h2>Projects</h2>
            {renderProjectList()}
        </div>
    )
}