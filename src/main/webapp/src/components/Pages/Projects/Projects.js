import React, {useState, useEffect} from 'react'
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllProjects} from "../../../store/actionCreators/project.actionCreator"

import {API_URL} from '../../../store/lib/vars'

export const Projects = () => {

    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const projects = useSelector(state => state.projects.list)


    useEffect(() => {
        dispatch(getAllProjects())
            .then(
                () => {
                    setIsLoaded(true)
                },
                (error) => {
                    setIsLoaded(true)
                    setError(error)
                }
            )
    }, [])

    const removeProject = projectId => {

        return async () => {
            try {
                const res = await fetch(`${API_URL}/api/projects/${projectId}`, {
                    method: 'DELETE'
                })
                if (res.status >= 200 || res.status < 300) {
                    projects.filter(p => p.id !== projectId)
                }
            } catch (e) {
                console.log(e.message)
            }
        }
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else if (projects.length === 0) {
        return <div className="alert alert-warning">No projects exist</div>;
    } else {
        return (
            <table className="table table-hover table-light">
                <tbody>
                {projects.map((val, key) => {
                    return (
                        <tr key={key}>
                            <td className="m-1 p-2">
                                <div className="d-flex justify-content-between">
                                    <NavLink className="nav-link" to={"/projects/" + val.id}>
                                        <div>
                                            {val.name}
                                        </div>
                                    </NavLink>
                                    <button
                                        onClick={removeProject(val.id)}
                                        className="btn btn-danger btn-sm"
                                    >Remove
                                    </button>
                                </div>
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