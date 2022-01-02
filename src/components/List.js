import React, { Component } from 'react';
import axios from 'axios';
import Create from './Create';

class List extends Component {
    state = { entries: [["1", "2"]], isCreate: false, deleteTitle: null};

    Mkjsx = props => {
        const title = props.title
        const text = props.text
        return (<div className="listEntry">
            {text} with title {title}
            <button style={{backgroundColor: "red", color: "white"}} onClick={() => this.deleteEntry(title)}>Delete</button>
            </div>);
    }

    componentDidMount() {
        console.log("List component mounted")
        this.fetchAndSync();
    }

    fetchAndSync = () => {
        axios.get('http://localhost:8000/api/todo', { mode: 'cors'})
            .then(res => { this.setState({entries: res.data});
            })
    }
    
    toggleIsCreate = () => {
        this.setState({isCreate : !this.state.isCreate});
    }

    addEntryToState = (data) => {
        //console.log(data)
        console.log("Received text is: ", data.text);
        console.log("Received title is: ", data.title);
        const preentry = {text: data.text, title: data.title}
        const preentry_mod1 = Object.entries(preentry);
        // Text then title
        const preentry_mod2 = [preentry_mod1[0][1], preentry_mod1[1][1]]
        console.log(preentry_mod2)
        const entries_copy = this.state.entries
        entries_copy.push(preentry)
        this.setState({entries: entries_copy})
        this.toggleIsCreate();
        }
        
    deleteEntry = title => {
        let filteredArray = this.state.entries.filter(item => item.title !== title);
        this.setState({entries: filteredArray});

    }

    render() {

       console.log(Object.entries(this.state.entries))
        return (
            <div>
                {this.state.isCreate ? (<Create parentCallback = {this.addEntryToState}/>)
                 : (
                <div>
                <h1>Welcome to your to-do list!</h1>
                <hr/>
                 <div className="listBox">
                    {(Object.entries(this.state.entries)).map((text, title) => (<this.Mkjsx text={text} title={title}/>))}
                    <button onClick={this.toggleIsCreate}>Create a new task</button>
                    </div>
                    </div>) }
            </div>
        )
    }
    }   


export default List;