import './App.css';
import React from 'react';
import Navigation from "./components/Navigation";
import RouterSwitch from "./components/Navigation/RouterSwitch";


function App() {
    return (

        <div className="container">
            <Navigation/>
            <RouterSwitch/>
        </div>
    )
}

export default App;