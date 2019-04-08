import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/List';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { homedir } from 'os';

ReactDOM.render(
<BrowserRouter>
    <Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/list" component={List} />
    </Switch>
</BrowserRouter>,
 document.getElementById('root'));
