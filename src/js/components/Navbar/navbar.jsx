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
        const { authenticated } = this.props;
        console.log(authenticated);

        return (
            <nav>
                {authenticated ? (
                    <div className="nav-wrapper">
                        <ul className="left">
                            <li>Hello</li>
                        </ul>
                        <span className="brand-logo center">Xirgo Updates</span>
                        <ul className="right">
                            <li><a href="/" onClick={this.handleClick}>Logout</a></li>
                        </ul>
                    </div>
                ) : (
                    <div className="nav-wrapper">
                        <span className="brand-logo center">Xirgo Updates</span>
                    </div>
                )}
            </nav>
        );
    }
}