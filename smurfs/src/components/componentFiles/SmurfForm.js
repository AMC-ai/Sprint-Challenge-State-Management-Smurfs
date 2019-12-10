import React, { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../actions/dataActions";

const SmurfForm = props => {
    console.log(`SurfForm`, props)
    const [newSmurf, setNewSmurf] = useState({ name: "", age: "", height: "" })

    const handleChanges = e => {
        //name and value from input fields, sets key: value pairs
        setNewSmurf({ ...newSmurf, [e.target.name]: e.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        props.addPost(newSmurf);
        setNewSmurf({
            name: "",
            age: "",
            height: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label >Name
            <input
                    maxLength="20"
                    type="text"
                    name="name"
                    id="smfName"
                    onChange={handleChanges}
                    value={newSmurf.name}
                    placeholder="Name"
                />
            </label>
            <label forHtml="smfAge">Age</label>
            <input
                type="number"
                name="age"
                id="smfAge"
                onChange={handleChanges}
                value={newSmurf.age}
                placeholder="age"
            />

            <label forHtml="smfHeight">Height</label>
            <input
                type="number"
                name="height"
                id="smfHeight"
                onChange={handleChanges}
                value={newSmurf.height}
                placeholder="height in cm"
            />

            <button onClick={handleSubmit}> Add Smurf </button>
        </form >
    );
}
export default connect(
    null,
    { addPost }
)(SmurfForm); 