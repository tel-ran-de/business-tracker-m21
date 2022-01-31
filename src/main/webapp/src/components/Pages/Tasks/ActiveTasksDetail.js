import React from 'react'

export default ({activeTask}) => {

    return (
        <>
            <li className="list-group-item list-group-item-success text-start">{activeTask.name}</li>
        </>
    )
}