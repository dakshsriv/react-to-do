import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Create = props => {
    const [newEntry, setNewEntry] = useState("");

    const updateNewEntry = event => {
        console.log("updateNewEntry has been triggered");
        console.log('event.target.value', event.target.value);
        setNewEntry({newEntry: event.target.value});
    }

    const onTrigger = (event) => {
        console.log(newEntry.newEntry);
        props.parentCallback(newEntry.newEntry);
        }

    const clearEntry = () => {
        console.log(newEntry);
        console.log("Clearing");
        console.log(newEntry);
        setNewEntry("");
    }

    const cancelEntry = () => {
        props.parentCallback("");
    }

    return (
        <div>
            <h1>Create a note here</h1>
            <hr />
            <form onSubmit={onTrigger} onReset={clearEntry}>
                <label>
                    <textarea rows={7} cols={90}  onChange={updateNewEntry}>
                    Enter your note here
                    </textarea>
                </label>
                <div>
                    <input type="submit" value="Submit" />
                    <div style={{display: 'inline-block'}}>
                    <input type="reset" value="Clear"/>
                    <button onClick={cancelEntry}>Cancel</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default Create;