import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Create = props => {
    const [newEntry, setNewEntry] = useState("");

    const updateNewEntry = event => {
        setNewEntry({newEntry: event.target.value});
    }

    const submitEntry = (event) => {
        event.preventDefault();
        props.parentCallback(newEntry.newEntry);
        }

    const clearEntry = (event) => {
        event.preventDefault();
        setNewEntry({newEntry: ""});
    }

    const cancelEntry = (event) => {
        event.preventDefault();
        props.parentCallback("");
    }

    return (
        <div>
            <h1>Create a note here</h1>
            <hr />
            <form onSubmit={submitEntry}>
                <label>
                    <textarea rows={7} cols={90} id="createEntryTextbox" value={newEntry.newEntry} placeholder="Enter your note here" onChange={updateNewEntry}/>
                </label>
                <div>
                    <button type="submit" onClick={submitEntry}>Submit</button>                    
                    <div style={{display: 'inline-block'}}>
                    <button type="clear" onClick={clearEntry}>Clear</button>
                    <button type="cancel" onClick={cancelEntry}>Cancel</button>
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default Create;