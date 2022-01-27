import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {addNewTask} from "../../../store/actionCreators/task.actionCreator";

export default props => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(props.task)

    const onChangeFieldHandler = e => {
        setFormData({
            ...formData, [e.target.name]: e.target.value,
        })
    }

    const onSubmitForm = e => {
        e.preventDefault()
        dispatch(addNewTask(formData))
    }

    const onCancelForm = e => {
        e.preventDefault()
        navigate('/about')
    }

    return (
        <div className="row">
            <div className="col-6">
                <h2>Add new task for "???ROADMAP NAME???"</h2>
                <form onSubmit={onSubmitForm}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Task name</label>
                        <input type="text"
                               className="form-control"
                               name="name"
                               placeholder="Enter a Task Name"
                               value={formData.name}
                               onChange={onChangeFieldHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="member" className="form-label">Responsible member</label>
                        <input type="text"
                               className="form-control"
                               name="member"
                               placeholder="Select Menu"
                               value={formData.memberId}
                               onChange={onChangeFieldHandler}
                        />
                    </div>
                    <div class="col-6">
                    <div class="mb-3">
                        <div class="mb-2">Status</div>
                        <div class="btn-group d-flex">

                            <button className="btn w-50 btn-outline-dark" type="button">todo</button>
                            <button className="btn w-50 btn-outline-dark" type="button">active</button>
                            <button className="btn w-50 btn-outline-dark" type="button">done</button>
                        </div>
                    </div>
                    </div>
                    <button type="reset"
                            className="btn btn-secondary me-2"
                            onClick={onCancelForm}
                    >Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
        </div>
    )
}