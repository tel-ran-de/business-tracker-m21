import './App.css';
import React from 'react';
import Navigation from "./components/Navigation";
import RouterSwitch from "./components/Navigation/RouterSwitch";


function App() {
    return (
        <>
            <Navigation/>
            <div className="container">
                <RouterSwitch/>
            </div>
        </>
    )
}

export default App;