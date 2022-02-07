import React from "react";
import {Navigate, Route, Routes} from "react-router-dom";

import About from "../Pages/About/About"
import Projects from "../Pages/Projects/Projects";
import ProjectDetail from "../Pages/Projects/ProjectDetail";
import Error from "../Pages/Error/Error";
import AddProject from "../Pages/Projects/AddProject";

export default () => {
    return (
        <>
            <Routes>
                <Route exact path="/" index element={<Navigate replace to="/projects" />} />
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/projects/:projectId" element={<ProjectDetail/>}/>
                <Route path="/add-project" element={<AddProject/>}/>
                <Route path="*" element={<Error/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}