import React, { Component } from 'react';
import axios from 'axios';
import Create from './Create';
import Update from './Update';
import uuid from 'react-uuid';

class List extends Component {
    state = { entries: [], isCreate: false, isUpdate: false, deleteTitle: null};

    JSX = (props) => {
        const eid = props.entry.eid
        const title = props.entry.title
        const text = props.entry.description
        return (<div className="listEntry">
            Title: <b>{title}</b> Text: {text}   
            <button onClick={() => this.setUpdateID(eid)}>Update</button>
            <button onClick={() => this.deleteHandler(eid)}>Delete</button>
            </div>);
    }

    getAllEntries = () => {
        axios.get('http://localhost:8000/api/todo', { mode: 'cors'})
            .then(res => { this.setState({entries: res.data});
        console.log("Fetch response is: ", this.state.entries)
            })
    }
    
    toggleIsCreate = () => {
        this.setState({isCreate : !this.state.isCreate});
    }

    setUpdateID = () => {
        this.setState({isUpdate : !this.state.updateID});
    }

    createHandler = (data) => {
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
        
    deleteHandler = eid => {
        let filteredArray = this.state.entries.filter(item => item.eid !== eid);
        this.setState({entries: filteredArray});
        const targetAddr = "http://localhost:8000/api/todo/" + eid;
        console.log(targetAddr)
        //axios.delete(targetAddr, {headers: {'accept': '*/*'} }).then(res => {console.log(res.data)})
        const options = {
            method: 'DELETE',
            headers : {      
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }
        
        axios.delete(targetAddr)
            .then(res => console.log(res.data))
        /* fetch(targetAddr, options)
            .then((res) => console.log(res.json(), "res"))
            .then((data) => console.log(data, "data"))
            .catch((err) => console.log(err, "err")); */

    }

    renderAid = () => {
        if (this.state.updateID != "") return (<Update parentCallback = {this.updateEntry} eid={this.state.updateID}/>);
        if (this.state.isCreate) {
           return (<Create parentCallback = {this.createHandler}/>);
        }
        return (<div>
            <h1>Welcome to your to-do list!</h1>
            <hr/>
             <div className="listBox">
                {this.state.entries.map(entry => (<this.JSX entry={entry} key={entry.eid}/>))}
                <button onClick={this.toggleIsCreate}>Create a new task</button>
                </div>
                </div>) };
    
    render() {
        return(
            <div><this.renderAid/></div>
        )
        /* return (
            <div>
                {this.state.isCreate ? (<Create parentCallback = {this.createHandler}/>)
                 : (
                <div>
                <h1>Welcome to your to-do list!</h1>
                <hr/>
                 <div className="listBox">
                    {this.state.entries.map(entry => (<this.JSX entry={entry} key={entry.eid}/>))}
                    <button onClick={this.toggleIsCreate}>Create a new task</button>
                    </div>
                    </div>) }
            </div>
        ) */
    } 
    }   


export default List;