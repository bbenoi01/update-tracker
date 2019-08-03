import axios from 'axios';
import { types } from '../types';


export function setAuthorizationHeader(token) {
    const FBIdToken = `Bearer ${token}`;
    localStorage.setItem('FBIdToken', FBIdToken);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
}

export function loginUser(userData, history) {
    return (dispatch) => {
        dispatch({ type: types.LOADING_UI });
        axios.post('/login', userData)
            .then(res => {
                setAuthorizationHeader(res.data.token);
                dispatch(getUserData());
                dispatch({ type: types.CLEAR_ERRORS });
                history.push('/home');
            })
            .catch(err => {
                console.log(err);
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response.data
                })
            })
    }
}

export function signupUser(newUserData, history) {
    return (dispatch) => {
        dispatch({ type: types.LOADING_UI });
        axios.post('/signup', newUserData)
            .then(res => {
                setAuthorizationHeader(res.data.token);
                dispatch(getUserData());
                dispatch({ type: types.CLEAR_ERRORS });
                history.push('/home');
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response.data
                })
            })
    }
}

export function getUserData() {
    return (dispatch) => {
        dispatch({ type: types.LOADING_USER });
        axios.get('/user')
            .then(res => {
                dispatch({
                    type: types.SET_USER,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response
                })
            });
    }
}

export function logoutUser() {
    return (dispatch) => {
        localStorage.removeItem('FBIdToken');
        delete axios.defaults.headers.common['Authorization'];
        dispatch({ type: types.SET_UNAUTHENTICATED });
    }
}

export function getAllRequests() {
    return (dispatch) => {
        axios.get('/requests')
            .then(res => {
                dispatch({
                    type: types.GET_ALL_REQUESTS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response
                })
            });
    }
}

export function getUserRequests() {
    return (dispatch) => {
        axios.get('/requests/user')
            .then(res => {
                dispatch({
                    type: types.GET_USER_REQUESTS,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response
                })
            });
    }
}

export function addUpdateRequest(newRequestData, name) {
    return (dispatch) => {
        axios.post('/user/request', newRequestData)
            .then(res => {
                if(name === 'Benoit') {
                    alert('Request added successfully');
                    dispatch(getAllRequests());
                } else {
                    alert('Request added successfully');
                    dispatch(getUserRequests());
                }
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response
                })
            });
    }
}

export function updateCompleted(requestId, name) {
    return (dispatch) => {
        axios.delete(`/request/${requestId}`)
            .then(res => {
                if(name === 'Benoit') {
                    alert('Request completed successfully');
                    dispatch(getAllRequests());
                } else {
                    alert('Request completed successfully');
                    dispatch(getUserRequests());
                }
            })
            .catch(err => {
                dispatch({
                    type: types.SET_ERRORS,
                    payload: err.response
                })
            });
    }
}