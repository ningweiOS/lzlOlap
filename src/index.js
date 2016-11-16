import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, Redirect, IndexRedirect } from 'react-router'
import Container from './App/Container';
import Home from './App/homeIndex/homeIndex';
import Collect from './App/collect/collect';
import User from './App/user/user';


render((
    <Router history={browserHistory}>
        <Route path="/" component={Container}>
            <IndexRedirect to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/collect" component={Collect} />
            <Route path="/user" component={User} />
        </Route>
    </Router>
), document.getElementById('App'));