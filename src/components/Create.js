import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Create extends Component {
    state = { newEntry: ""};

    updateNewEntry = event => {
        console.log("updateNewEntry has been triggered");
        console.log('event.target.value', event.target.value);
        this.setState({newEntry: event.target.value});
    }

    onTrigger = (event) => {
        console.log(this.state.newEntry);
        this.props.parentCallback(this.state.newEntry);
        }

    cancelEntry = () => {
        this.props.parentCallback("");
    }

    render() {
        return (
            <div>
                <h1>Create a note here</h1>
                <hr />
                <form onSubmit={this.onTrigger}>
                    <label>
                        Name:
                        <textarea rows={7} cols={90} value={this.state.newEntry} onChange={this.updateNewEntry}>
                        Enter your note here
                        </textarea>
                    </label>
                    <input type="submit" value="Submit" />
                    <input type="reset" value="Reset" /> 
                    <div style={{display: 'inline-block'}}>
                        <button onClick={this.cancelEntry}>Cancel</button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default Create;