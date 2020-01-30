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

        let name = 'Hello, Brandon';

        // if(credentials) {
        //     name = 'Hello, ' + credentials.firstName;
        // } else {
        //     name = 'Hello, Brandon'
        // }

        return (
            <nav>
                {authenticated ? (
                    <div className="nav-wrapper">
                        <ul className="left">
                            <li style={{padding: '0 15px'}}>{name}</li>
                        </ul>
                        <div className="brand-logo center">
                            <span style={{float: 'left'}}>Xirgo</span>
                            <i className="fab fa-jedi-order fa-1x" style={{margin: '0px 15px', color: credentials.color}}/>
                            <span>Updates</span>
                        </div>
                        <ul className="right">
                            <li><a href="/" onClick={this.handleClick}>Logout</a></li>
                        </ul>
                    </div>
                ) : (
                    <div className="nav-wrapper">
                        <ul className="left">
                            <li style={{padding: '0 15px'}}>{name}</li>
                        </ul>
                        <div className="brand-logo center">
                            <span style={{float: 'left'}}>Xirgo</span>
                            <i className="fab fa-jedi-order fa-1x" style={{margin: '0px 15px', color: credentials.color}}/>
                            <span>Updates</span>
                        </div>
                    </div>
                )}
            </nav>
        );
    }
}