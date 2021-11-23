import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Create from './components/Create';
import './index.css'; // <-- LINK STYLESHEET IN THIS FILE
import { Router, Switch, Route } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/create" component={Create}/>
        </Switch>
    </Router>,
    document.getElementById('root')); 