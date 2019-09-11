import React, { Component } from 'react';
import '../css/style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import AuthRoute from './util/AuthRoute';
import Login from './containers/Login';
import Signup from './containers/Signup';
import Main from './containers/Main';
import rootStore from './rootStore';
import { types } from './types';
import {
    logoutUser,
    getUserData
} from './actions/appActions';

axios.defaults.baseURL = "https://us-central1-update-tracker-5c606.cloudfunctions.net/api";

const token = localStorage.FBIdToken;

if(token) {
  const decodedToken = jwtDecode(token);
  console.log(decodedToken);
  if(decodedToken.exp * 1000 < Date.now()) {
    rootStore.dispatch(logoutUser());
    window.location.href = '/';
  } else {
    rootStore.dispatch({ type: types.SET_AUTHENTICATED });
    axios.defaults.headers.common['Authorization'] = token;
    rootStore.dispatch(getUserData());
  }
}

export default class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <AuthRoute exact path='/' component={Login}/>
          <AuthRoute exact path='/signup' component={Signup}/>
          <Route exact path='/home' component={Main}/>
        </Switch>
      </Router>
    );
  }
}