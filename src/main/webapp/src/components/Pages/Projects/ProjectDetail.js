import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {Link} from "react-router-dom";
import MemberDetail from "../Members/MemberDetail";
import {getMemberByProjectId} from "../../../store/actionCreators/member.actionCreator";
import {getProjectById} from "../../../store/actionCreators/project.actionCreator";

export default props => {

    const dispatch = useDispatch()
    const {projectId} = useParams()
    const members = useSelector(state => state.member.list)
    const project = useSelector(state => state.project.list)

    useEffect(() => {
        dispatch(getProjectById(projectId))
        dispatch(getMemberByProjectId(projectId))
    }, [])

    const renderMemberList = () => {
        return !members.length
            ? (<p className="alert alert-warning">No Members selected</p>)
            : members.map(c => <MemberDetail key={c.id} member={c}/>)
    }

    return (
        <div className="row">
            <div className="d-flex flex-row bd-highlight align-items-center mb-3">
                <div>
                    <Link className="btn btn-sm btn-info" to="/projects">Back</Link>
                </div>
                <div className="w-100 text-center">
                    <h2>Project: {project.name}</h2>
                </div>
            </div>
            <div className="mb-3">
                <h3>Members</h3>
                <div className="d-flex flex-row justify-content-start">
                    {renderMemberList()}
                </div>
            </div>
            <div className="d-flex justify-content-between text-center">
                <div className="card col-md-4">
                    <h3>Roadmap</h3>
                </div>
                <div className="card col-4">
                    <h3>Current active tasks</h3>
                </div>
                <div className="card col-4">
                    <h3>KPI</h3>
                </div>
            </div>
        </div>
    )
}

