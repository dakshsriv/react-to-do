import React, { Component } from 'react';

class Create extends Component {
    state = { newEntry: ""};

    updateNewEntry = event => {
        console.log('event', event);
    }

    render() {
        return (
            <div>
                <input 
                onChange={this.updateNewEntry} 
                placeholder="Enter your note here" />
                <button>Submit</button>
            </div>
        )
    }
}

export default Create;