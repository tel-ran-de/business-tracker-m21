import React from 'react'
import {NavLink} from "react-router-dom";

const Error = () => {
    return (
        <>
            <div className="error404">
                <h1>404|Page not found </h1>
                
                <NavLink to="/">Go back</NavLink>



            </div>
        </>
    );
};
export default Error;
