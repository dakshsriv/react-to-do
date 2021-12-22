import React, { Component } from 'react';
import {v4 as uuidv4} from 'uuid';
import { Link } from 'react-router-dom';
import { Alert } from 'react-alert'
import Create from './Create';

class List extends Component {
    state = { entries: [], isCreate: false, deleteId: null};

    Mkjsx = props => {
        const {text, timeCreation, timeDue, id} = props.entry;
        return (<div className="listEntry">
            {text} was posted at {timeCreation}. It's due at {timeDue} 
            <button style={{backgroundColor: "red", color: "white"}} onClick={() => this.deleteEntry(id)}>Delete</button>
            </div>);
    }

    componentDidMount() {
        // Simple GET request using fetch
       this.fetchAndSync();
        //console.log(this.state.entries)
    }

    fetchAndSync = () => {
        fetch("http://localhost:8000/")
        .then(response => {  if (response.ok) {
            return response.json();
          } else {
            throw new Error('Something went wrong');
          }
        })
        .then(data => this.setState({entries: data}))
        .catch((error) => {console.log(error)});
    }
    
    toggleIsCreate = () => {
        this.setState({isCreate : !this.state.isCreate});
    }

    addEntryToState = (data) => {
        const requestOptions = {
            method: 'POST',
            mode: 'no-cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: { 'Accept': 'application/json',
                'Content-Type': 'application/json' },
            body: JSON.stringify({ text: 'React POST Request Example', timeDue: 'timeDue' })
        };

        fetch('http://localhost:8000', requestOptions)
            .then(response => response.json())
            //.then(data => this.setState({ postId: data.id }))
            .then((data) => console.log(response))
            .catch((error) => { console.log(error.response); });

        this.toggleIsCreate();
        /* fetch('http://localhost:8000', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "text": data,
                "timeDue": '2021-12-19T14:34:32+00:00'}
            ) }) */

        }
        

        
        /*
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
        this.toggleIsCreate(); */


    deleteEntry = id => {
        let filteredArray = this.state.entries.filter(item => item.id !== id);
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
        // console.log(this.state.entries);

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
    }   


export default List;