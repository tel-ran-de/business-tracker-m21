import React, { useState, useEffect } from 'react'
import {NavLink} from "react-router-dom";
import { API_URL } from '../../constants/global'


const Projects = () => {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch(API_URL+"/api/projects")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setProjects(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    }else if (projects.length === 0) {
        return <div className="alert alert-warning">No projects exist</div>;
    } else {
        return (
            <table className="table table-hover table-light">
                <tbody>
                {projects.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className="m-1 p-2">
                                <NavLink className="nav-link" to={"/projects/" + val.id}>{val.name}</NavLink>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        )
    }
}

export default Projects;