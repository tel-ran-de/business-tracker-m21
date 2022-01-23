import React from "react";
import {Route, Routes} from "react-router-dom";

import Projects from "../Pages/Projects/Projects"

export default (props) => {
    return (
        <>
            <Routes>
                <Route path="/" index element={<Projects/>}/>
            </Routes>
        </>
    )
}