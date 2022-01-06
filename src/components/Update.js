import React, { useState } from 'react';
import axios from 'axios';

function Update(props) {
    const [newText, setnewText] = useState("");
    const [newTitle, setnewTitle] = useState("");
    const [isPending, setIsPending] = useState(false);
    const [entry, setEntry] = useState({})



    const updateNewText = event => {
        setnewText({newText: event.target.value});
    }

    const updateNewTitle = event => {
        setnewTitle({newTitle: event.target.value});
    }

    const submit = (event) => {
        event.preventDefault();
        setIsPending(true);
        props.parentCallback({title : newTitle.newTitle, text: newText.newText});
        }

    const clearEntry = (event) => {
        event.preventDefault();
        setnewText({newText: ""});
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
                    id="updateTitleTextbox" value={newTitle.newTitle} defaultValue={entry.title} onChange={updateNewTitle}/>

                    <textarea  rows={7} cols={90}
                    maxLength={630} id="updateEntryTextbox" value={newText.newText} defaultValue={entry.description} onChange={updateNewText}/>
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