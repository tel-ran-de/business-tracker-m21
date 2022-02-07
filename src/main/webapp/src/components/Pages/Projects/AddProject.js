import React from 'react'
import ProjectForm from "./ProjectFrom";

export default () => {

    return (<ProjectForm
        mode="add"
        title="Add new Project"
        project={{
            name: '',
            userIds: []
        }}
    />)
}