import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
    <div className = "UserOutput">
        <p>The user of the first paragraph is {props.username}</p>
        <p>Second paragraph</p>
        {props.children}
    </div>
    )
};

export default UserOutput;