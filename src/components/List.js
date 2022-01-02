import React, { Component } from 'react';
import axios from 'axios';
import Create from './Create';
import uuid from 'react-uuid';

class List extends Component {
    state = { entries: [], isCreate: false, deleteTitle: null};

    Mkjsx = props => {
        const eid = props.entry.eid
        const title = props.entry.title
        const text = props.entry.description
        return (<div className="listEntry">
            {eid}. <b>{title}</b>: {text} 
            <button onClick={() => this.deleteEntry(eid)}>Delete</button>
            </div>);
    }

    componentDidMount() {
        console.log("List component mounted")
        this.fetchAndSync();
    }

    componentDidCatch(error, info) {
        // Display fallback UI
      }
    
    fetchAndSync = () => {
        axios.get('http://localhost:8000/api/todo', { mode: 'cors'})
            .then(res => { this.setState({entries: res.data});
        console.log("Fetch response is: ", this.state.entries)
            })
    }
    
    toggleIsCreate = () => {
        this.setState({isCreate : !this.state.isCreate});
    }

    addEntryToState = (data) => {
        //console.log(data)
        const preentry = {title: data.title, description: data.text}
        console.log(preentry)
        const entries_copy = this.state.entries
        entries_copy.push(preentry)
        this.setState({entries: entries_copy})
        console.log(this.state.entries)
        axios.post('http://localhost:8000/api/todo/', {
            eid: uuid(), title: data.title, description: data.text
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.toggleIsCreate();
        }
        
    deleteEntry = eid => {
        let filteredArray = this.state.entries.filter(item => item.eid !== eid);
        this.setState({entries: filteredArray});
        axios.delete("http://localhost:8000/api/todo/", {eid}).then(res => {console.log(res.data)})

    }

    render() {

        return (
            <div>
                {this.state.isCreate ? (<Create parentCallback = {this.addEntryToState}/>)
                 : (
                <div>
                <h1>Welcome to your to-do list!</h1>
                <hr/>
                 <div className="listBox">
                    {this.state.entries.map(entry => (<this.Mkjsx entry={entry} key={entry.eid}/>))}
                    <button onClick={this.toggleIsCreate}>Create a new task</button>
                    </div>
                    </div>) }
            </div>
        )
    }
    }   


export default List;