import React from 'react';


const UserInput = (props) => {
    const style = {
        font: 'inherit',
        cursor: 'pointer',
        display: 'inline',
        margin: '16px auto',
        border: '2px solid #eee',
        boxShadow: '0 5px 5px #ccc',
        textAlign: 'center'
      };
    return (
    
    <div style = {style}>
        <input type="text"
        onChange={props.changed}
        value={props.currentUserName} />
    </div>
    )
};

export default UserInput;