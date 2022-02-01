import React, {useEffect, useState} from 'react';

// const MembersList = () => {
//
//     const [members, setMembers] = useState([])
// }
//     useEffect(()=>{
//         fetchMembers();
//     },[]);

export default function NewProject(props) {
    return (
        <form>
            <div className="p-1 form-group">
                <label htmlFor="exampleFormControlInput1">Project Name</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       placeholder="SpaceX Launch"/>
            </div>

            <div className="p-1 form-group">
                <label htmlFor="exampleFormControlSelect2">Select Project Members</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                    <option>Elon Mask</option>
                    <option>Jeff</option>
                    <option>John Snow</option>
                    <option>Father Carpenter</option>
                    <option>You</option>
                    <option>Random Person</option>
                </select>
            </div>
            <div className="button">
                <input className="btn btn-primary" type="submit" value="Cancel"/>
                <input className="btn  btn-primary" type="submit" value="Submit"/>
            </div>
        </form>

        )
    }


