import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import AuthRoute from '../util/authRoute';
import Main from '../containers/Main';
import Signup from '../views/Signup';
import Login from '../views/Login';

export default class Routes extends Component {
    render() {
        return (
            <Switch>
                <AuthRoute exact path="/" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                <Route exact path="/home" component={Main}/>
            </Switch>
        );
    }
}