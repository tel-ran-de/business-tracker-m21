import React from "react"
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    return (

        <nav>
            <NavLink to="/">Project</NavLink>
            <NavLink to="/New Project">New Project</NavLink>
            <NavLink to="/About">About</NavLink>
        </nav>
    )
}

export default Navigation;