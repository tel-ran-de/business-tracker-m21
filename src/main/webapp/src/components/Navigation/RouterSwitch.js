import React from "react";
import {Route, Routes} from "react-router-dom";

import About from "../Pages/About/About"
import AddTask from "../Pages/Tasks/AddTask";

export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/add-task" element={<AddTask/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </>
    )
}