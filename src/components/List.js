import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';
import Create from './Create';

class List extends Component {
    state = { entries: [], isCreate: false};

    Mkjsx = props => {
        //console.log(props);
        const {text, timeCreation, timeDue} = props.entry;
        return (<div className="listEntry">{text} was posted at {timeCreation}. It's due at {timeDue}</div>);
    }

    toggleIsCreate = () => {
        this.setState({isCreate : !this.state.isCreate});
        console.log(this.state.isCreate);
    }

    addEntryToState = (data) => {
        if (data == "") {
            this.toggleIsCreate();
            return(0);
        }
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
                 : (
                <div>
                <h1>Welcome to your to-do list!</h1>
                <hr/>
                 <div className="listBox">
                    {(this.state.entries).map(entry => (<this.Mkjsx entry={entry}/>))}
                    <button onClick={this.toggleIsCreate}>Create a new task</button>
                    </div>
                    </div>) }
            </div>
        )
    }
};

export default List;