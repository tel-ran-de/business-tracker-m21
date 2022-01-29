import React from 'react'

import {Link} from "react-router-dom";

export default props => {

    return (
        <div className="row">
            <div className="d-flex flex-row bd-highlight align-items-center mb-3">
                <div>
                    <Link className="btn btn-sm btn-info" to="/about">Back</Link>
                </div>
                <div className="w-100 text-center">
                    <h2>Project Name</h2>
                </div>
            </div>
            <div className="mb-3">
                <h3>Members</h3>
                <div className="d-flex flex-row justify-content-start">

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

