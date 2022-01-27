import React from 'react'
import TaskForm from "./TaskForm";

export default props => {

    return (<TaskForm
        mode="add"
        title="Add New"
        task={{
            name: '',
            finished: true,
            active: true,
            // !!! mileStoneId and memberId specified!!!
            mileStoneId: 1,
            memberId: 1,
            delivery: "string",
            resources: [
                {
                    id: 0,
                    name: "string",
                    hours: 0,
                    cost: 0,
                    taskId: 0
                }
            ]
        }}
    />)
}