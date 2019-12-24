import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AuthRoute = ({ component: Component, authenticated, ...rest }) => (
    <Route
    {...rest}
    render={(props) => authenticated === true ? <Redirect to={'/home'}/> : <Component {...props}/>}
    />
);

function mapStoreToProps(store){
    return {
        authenticated: store.app.authenticated
    }
};

export default connect(mapStoreToProps)(AuthRoute);