import React, { Component } from 'react';

class EntryBox extends Component {
    state = { newEntry: ""};

    updateNewEntry = event => {
        console.log("updateNewEntry has been triggered");
        console.log('event.target.value', event.target.value);
        this.setState({newEntry: event.target.value});
    }

    clearEntry = () => {
        console.log(this.state.newEntry);
        this.setState({newEntry: ""});
        console.log(this.state.newEntry);
    }

    sendUp = () => {
        this.props.target(this.state.newEntry);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.sendUp}>
                    <label>
                        <textarea rows={7} cols={90} value={this.state.newEntry} onChange={this.updateNewEntry}>
                        Enter your note here
                        </textarea>
                    </label>
                    <div>
                        <input type="submit" value="Submit" />
                        <div style={{display: 'inline-block'}}>
                            <button onClick={this.clearEntry}>Clear</button>
                            <button onClick={this.props.cancel}>Cancel</button>
                        </div>
                    </div>
                </form>                
            </div>
        )
    }
}

export default EntryBox;