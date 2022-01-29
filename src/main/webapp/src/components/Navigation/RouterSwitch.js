import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "../Pages/About/About";
import ProjectDetail from "../Pages/Projects/ProjectDetail";


export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/projects/:id" element={<ProjectDetail/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}