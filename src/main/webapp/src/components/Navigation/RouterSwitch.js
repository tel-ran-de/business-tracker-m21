import React from "react";
import {Route, Routes} from "react-router-dom";

import Projects from "../Pages/Projects/Projects"
import About from "../Pages/About/About"

export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/" index element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}