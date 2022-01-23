import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "../Pages/About/About"

export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}