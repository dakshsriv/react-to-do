import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Create = props => {
    const [newEntry, setNewEntry] = useState("");

    const updateNewEntry = event => {
        console.log("updateNewEntry has been triggered");
        console.log('event.target.value', event.target.value);
        setNewEntry({newEntry: event.target.value});
    }

    const submitEntry = (event) => {
        event.preventDefault();
        console.log(newEntry.newEntry);
        props.parentCallback(newEntry.newEntry);
        }

    const clearEntry = (event) => {
        event.preventDefault();
        console.log("Before", newEntry);
        setNewEntry({newEntry: ""});
    }

    const cancelEntry = (event) => {
        event.preventDefault();
        props.parentCallback("");
    }

    const clearEntryBox = () => {
        console.log("function reached")
        document.getElementById('createEntryTextbox').value = '';
    }

    return (
        <div>
            <h1>Create a note here</h1>
            <hr />
            <form onSubmit={submitEntry} onReset={clearEntry}>
                <label>
                    <textarea rows={7} cols={90} id="createEntryTextbox" value={newEntry.newEntry} placeholder="Enter your note here" onChange={updateNewEntry}/>
                </label>
                <div>
                    <input type="submit" value="Submit" />
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