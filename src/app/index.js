import React from 'react';
import ReactDOM from 'react-dom';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { homedir } from 'os';

ReactDOM.render(
<BrowserRouter>
    <Switch>
			<Route path="/" exact={true} component={Home} />
			<Route path="/people" component={People} />
			<Route path="/planets" component={Planets} />
			<Route path="/species" component={Species} />
    </Switch>
</BrowserRouter>,
 document.getElementById('root'));
