import React, { Component } from 'react';
import { Link }from 'react-router-dom';

class Create extends Component {
    state = { newEntry: ""};

    updateNewEntry = event => {
        console.log('event.target.value', event.target.value);
    }

    render() {
        return (
            <div>
                <h1>Create a note here</h1>
                <hr />
                <textarea rows={7} cols={90} value={this.state.newEntry} onChange={this.updateNewEntry}>
                Enter your note here
                </textarea>
                <Link to="/">
                    <button>Cancel</button>
                </Link>
                <button>Create</button>

            </div>
        )
    }
}

export default Create;