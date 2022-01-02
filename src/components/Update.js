import React, { useState } from 'react';

function Update(props) {
    const [newEntry, setNewEntry] = useState("");
    const [newTitle, setNewTitle] = useState("");
    const [isPending, setIsPending] = useState(false);


    const updateNewEntry = event => {
        setNewEntry({newEntry: event.target.value});
    }

    const updateNewTitle = event => {
        setNewTitle({newTitle: event.target.value});
    }

    const submit = (event) => {
        event.preventDefault();
        setIsPending(true);
        props.parentCallback({title : newTitle.newTitle, text: newEntry.newEntry});
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
            <h1>Update your note</h1>
            <hr />
            <form onSubmit={submit}>
                    <textarea style={{"fontSize":"36px", "marginBottom":"5px"}} rows={1} cols={49} 
                    maxLength={49}
                    id="updateTitleTextbox" value={newTitle.newTitle} defaultValue={props.entry.title} onChange={updateNewTitle}/>

                    <textarea  rows={7} cols={90}
                    maxLength={630} id="updateEntryTextbox" value={newEntry.newEntry} defaultValue={props.entry.description} onChange={updateNewEntry}/>
                <div>
                    {isPending ? <button disabled={true} type="submit" onClick={submit}>Submitting</button>   : <button type="submit" onClick={submit}>Submit</button>   }
                                     
                    <div style={{display: 'inline-block'}}>
                        {isPending ? <button disabled={true} type="clear" onClick={clearEntry}>Clear</button> : <button type="clear" onClick={clearEntry}>Clear</button>}
                        {isPending ? <button disabled={true} type="cancel" onClick={cancelEntry}>Cancel</button>: <button type="cancel" onClick={cancelEntry}>Cancel</button>}
                    </div>
                </div>
            </form>
            
        </div>
    )
}

export default Update;