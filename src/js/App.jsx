import React, { Component } from 'react';
import rootStore from './rootStore';
import { BrowserRouter as Router } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import '../css/style.css';

import { types } from './types';
import {
    logoutUser,
    getUserData
} from './actions/appActions';

import axios from 'axios';

import Routes from './routes';

axios.defaults.baseURL = "https://us-central1-update-tracker-5c606.cloudfunctions.net/api";

const token = localStorage.FBIdToken;

if(token) {
  const decodedToken = jwtDecode(token);
  console.log('decoded token', decodedToken);
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
        <Routes/>
      </Router>
    );
  }
}