import React from "react"

const Navigation = () => {
    return (

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Business Tracker</a>

    <div className="navbar-nav">
        <a className="nav-link active" aria-current="page" href="#">Project</a>
        <a className="nav-link" href="#">New Project</a>
        <a className="nav-link" href="#">About</a>
</div>
        </div>
            </nav>
    )
}

export default Navigation;