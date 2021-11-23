import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';

class List extends Component {
    state = { entries: [{text: "Hello",  timeCreation: "4:00", timeEdit: "5:00"}, {text: "How are you?",  timeCreation: "4:01", timeEdit: "5:13"}, {text: "I'm good",  timeCreation: "4:02", timeEdit: "4:49"}]};

    Mkjsx = props => {
        console.log(props);
        const {text, timeCreation, timeEdit} = props.entry;
        return (<div className="listEntry">{text} was posted at {timeCreation}. It was last edited at {timeEdit}</div>);
    }

    createEntry = props => {
        const id = uuidv4();

        // Output: (Text, Time, UUID)
    }

    render() {
        // console.log(Checkbox)
        // console.log((this.state.entries).map(entry => {this.mkJSX(entry)}))
        return (
            <div>
                <Link to='/create'>Create a new entry</Link>
                {(this.state.entries).map(entry => (<this.Mkjsx entry={entry}/>))}
            </div>
        )
    }
};

export default List;