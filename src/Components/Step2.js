import React from 'react'

function Step2(props) {
    return (
        <div className="form-group">
        <label>Username</label>
        <input 
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={props.username}
        onChange={props.handleChange}
        >
        </input>
        </div>
    )
}

export default Step2
