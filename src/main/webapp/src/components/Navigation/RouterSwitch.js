import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "../Pages/About/About"
import NewProject from "../Pages/newProject/newProject";

export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/about" element={<About/>}/>
                <Route path="/newProject" element={<NewProject/>}/>
            </Routes>
        </>
    )
}