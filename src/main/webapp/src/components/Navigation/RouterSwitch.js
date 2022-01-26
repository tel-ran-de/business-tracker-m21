import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "../Pages/About/About"
import Projects from "../Pages/Projects/Projects";

export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}