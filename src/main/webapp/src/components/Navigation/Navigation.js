import React from "react"
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Business Tracker</a>

                <div className="navbar-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add-project">New Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
<<<<<<< HEAD
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/add-task">Add Task</NavLink>
                        </li>
=======
>>>>>>> 4c34d156413d7ecc9b1121313e9c3fef3f02ff9d
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;