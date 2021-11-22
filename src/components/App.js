import React, { Component } from 'react';
import List from "./List"

class App extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to your to-do list!</h1>
                <hr/>
                <List/>
            </div>
        );
    }
}

export default App;
