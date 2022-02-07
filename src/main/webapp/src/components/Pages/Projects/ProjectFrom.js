import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {getAllUsers} from "../../../store/actionCreators/user.actionCreator";
import {addNewProject} from "../../../store/actionCreators/project.actionCreator";

export default props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector(state => state.user.list)

    const [formData, setFormData] = useState(props.project)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const renderUsersList = () => {
        return !users.length
            ? (<p className="alert alert-warning">No Users registered</p>)
            : users.map(u => <li key={u.id} className="list-group-item list-group-item-success text-start">
                <input
                    className="me-3"
                    type="checkbox"
                    name="userIds"
                    value={u.id}
                    onClick={onCheckMember}
                />
                {u.name} {u.lastName} ({u.position})
            </li>)
    }

    const onCheckMember = e => {
        const members = formData.userIds
        let ind
        if (e.target.checked) {
            members.push(+e.target.value)
        } else {
            ind = members.indexOf(+e.target.value)
            members.splice(ind, 1)
        }
        setFormData({...formData, userIds: members})
    }

    const onChangeFieldHandler = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const onSubmitForm = e => {
        e.preventDefault()
        if (props.mode === 'edit') {
            // dispatch(changeProject(formData))
        } else if (props.mode === 'add') {
            dispatch(addNewProject(formData))
            navigate('/projects')
        }
    }

    return (
        <div className="row">
            <div className="d-flex flex-row bd-highlight align-items-center mb-3">
                <div>
                    <Link className="btn btn-sm btn-info" to="/projects">Back</Link>
                </div>
                <div className="w-100 text-center">
                    <h2>{props.title}</h2>
                </div>
            </div>
            <form onSubmit={onSubmitForm}>
                <div className="mb-3 col-md-4">
                    <label htmlFor="name" className="form-label">Project name</label>
                    <input type="text"
                           className="form-control"
                           name="name"
                           placeholder="Enter a Name for your new project"
                           value={formData.name}
                           onChange={onChangeFieldHandler}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="members" className="form-label">Select project members</label>
                    <ul class="col-md-4 overflow-auto" style={{height: '300px'}}>
                        {renderUsersList()}
                    </ul>
                </div>
                <button type="submit" className="btn btn-primary">{props.title}</button>
            </form>
        </div>
    )
}