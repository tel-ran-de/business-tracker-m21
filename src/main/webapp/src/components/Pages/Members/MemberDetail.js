import React from 'react'

export default ({member}) => {

    return (
        <div className="card me-2 col-1">
            <div className="">
                <div className="text-center">
                    <img src={member.img} className="rounded img-responsive img-fluid" alt={member.name} />
                </div>
            </div>
            <div className="col-8">
                <h6>{member.name} {member.lastName}</h6>
                <p><em>{member.position}</em></p>
            </div>

        </div>

    )
}