import './App.css';
import React from 'react';
import Navigation from "./components/Navigation/Navigation";
import RouterSwitch from "./components/Navigation/RouterSwitch";
import newProject from "./components/Pages/newProject/newProject";


function App() {
    return (
        <>
            <div className="container">
                <RouterSwitch/>
                <Navigation/>
            </div>
        </>
    )
}

export default App;