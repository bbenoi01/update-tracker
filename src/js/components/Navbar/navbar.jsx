import React, { Component } from 'react';
import {
    logoutUser
} from '../../actions/appActions';

export default class Navbar extends Component {

    handleClick = () => {
        const { dispatch } = this.props;
        dispatch(logoutUser());
    }

    render() {
        const { authenticated, credentials } = this.props;
        console.log(authenticated);

        let name;

        if(credentials) {
            name = 'Hello, ' + credentials.firstName;
        } else {
            name = 'Hello'
        }

        return (
            <nav>
                {authenticated ? (
                    <div className="nav-wrapper">
                        <ul className="left">
                            <li style={{padding: '0 15px'}}>{name}</li>
                        </ul>
                        <span className="brand-logo center">Xirgo Updates</span>
                        <ul className="right">
                            <li><a href="/" onClick={this.handleClick}>Logout</a></li>
                        </ul>
                    </div>
                ) : (
                    <div className="nav-wrapper">
                        <span className="brand-logo center">Xirgo Updates</span>
                        <ul className="right">
                            <li><a href="/">Login</a></li>
                        </ul>
                    </div>
                )}
            </nav>
        );
    }
}