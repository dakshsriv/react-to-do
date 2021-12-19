import React, { useState } from 'react';

const Create = props => {
    const [newEntry, setNewEntry] = useState("");
    const [isPending, setIsPending] = useState(false);

    const updateNewEntry = event => {
        setNewEntry({newEntry: event.target.value});
    }

    const submitEntry = (event) => {
        event.preventDefault();
        setIsPending(true);
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
                    {isPending ? <button disabled="true" type="submit" onClick={submitEntry}>Submitting</button>   : <button type="submit" onClick={submitEntry}>Submit</button>   }
                                     
                    <div style={{display: 'inline-block'}}>
                        {isPending ? <button disabled="true" type="clear" onClick={clearEntry}>Clear</button> : <button type="clear" onClick={clearEntry}>Clear</button>}
                        {isPending ? <button disabled="true" type="cancel" onClick={cancelEntry}>Cancel</button>: <button type="cancel" onClick={cancelEntry}>Cancel</button>}
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default Create;