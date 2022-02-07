import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "../Pages/About/About"
import Projects from "../Pages/Projects/Projects";
import Error from "../Pages/Error/Error";


export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="*" element={<Error/>}/>

            </Routes>
        </>
    )
}