import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';
import Create from './Create';

class List extends Component {
    state = { entries: [{text: "Hello",  timeCreation: "4:00", timeDue: "5:00"}, {text: "How are you?",  timeCreation: "4:01", timeDue: "5:13"}, {text: "I'm good",  timeCreation: "4:02", timeDue: "4:49"}], isCreate: false};

    Mkjsx = props => {
        //console.log(props);
        const {text, timeCreation, timeDue} = props.entry;
        return (<div className="listEntry">{text} was posted at {timeCreation}. It's due at {timeDue}</div>);
    }

    toggleIsCreate = () => {
        this.setState({isCreate : !this.state.isCreate});
    }

    addEntryToState = (data) => {
        const id = uuidv4();
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var wholeTime = date + time;
        const oldValues = this.state.entries;
        oldValues.push({text: data, timeCreation: wholeTime, timeDue: "5:15"});
        this.setState({entries: oldValues});
        this.toggleIsCreate();
    }
    render() {
        // console.log(Checkbox)
        // console.log((this.state.entries).map(entry => {this.mkJSX(entry)}))
        return (
            <div>

                {this.state.isCreate ? (<Create parentCallback = {this.addEntryToState}/>)
                 : (<div>{(this.state.entries).map(entry => (<this.Mkjsx entry={entry}/>))}
                    <button onClick={this.toggleIsCreate}>Create a new task</button>
                    </div>) }
                
            </div>
        )
    }
};

export default List;