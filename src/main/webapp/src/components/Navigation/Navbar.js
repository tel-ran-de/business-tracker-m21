import React from 'react'
import {NavLink} from "react-router-dom";

export default () => {


    return (
        <nav className="navbar fixed-top navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <span className="navbar-brand">Business-tracker</span>
                <div className="navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Projects</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}