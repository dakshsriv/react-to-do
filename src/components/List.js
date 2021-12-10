import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';
import { Alert } from 'react-alert'
import Create from './Create';

class List extends Component {
    state = { entries: [], isCreate: false, deleteId: null};

    Mkjsx = props => {
        console.log("Mkjsx reached");
        const {text, timeCreation, timeDue, id} = props.entry;
        return (<div className="listEntry">
            {text} was posted at {timeCreation}. It's due at {timeDue} 
            <button style={{backgroundColor: "red", color: "white"}} onClick={() => this.deleteEntry(id)}>Delete </button>
            </div>);
    }

    toggleIsCreate = () => {
        this.setState({isCreate : !this.state.isCreate});
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
        oldValues.push({text: data, timeCreation: wholeTime, timeDue: "5:15", id: id});
        this.setState({entries: oldValues});
        this.toggleIsCreate();
    }

    deleteEntry = id => {
        let filteredArray = this.state.entries.filter(item => item.id !== id);
        console.log(filteredArray)
        this.setState({entries: filteredArray});

        /*
        var newEntries = this.state.entries;
        for (var i = 0; i < this.state.entries.len; i++) {
            listId = (this.state.entries[i]).id;
            if (id == listId) {
                newEntries.splice(i, 1);
            }
        }
        this.setState({entries: newEntries});
        */
    }

    render() {
        console.log(this.state.entries);
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

                    {(this.state.entries).map(entry => (<this.Mkjsx entry={entry} key={entry.id}/>))}
                    <button onClick={this.toggleIsCreate}>Create a new task</button>
                    </div>
                    </div>) }
            </div>
        )
    }
};

export default List;