import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "../Pages/About/About"
import Projects from "../Pages/Projects/Projects";
import ProjectDetail from "../Pages/Projects/ProjectDetail";


export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/projects/:projectId" element={<ProjectDetail/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}