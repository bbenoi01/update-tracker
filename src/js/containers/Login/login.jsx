import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Progress from '../../components/Progress';

import {
    loginUser
} from '../../actions/appActions';

export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        const { dispatch, history } = this.props;
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        dispatch(loginUser(userData, history));
    }

    render() {
        const { errors, loading } = this.props;

        return (
            <div className="row">
                <div className="col s4 offset-s4">
                    <div className="card grey darken-3 white-text">
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-content">
                                <span className="card-title center"><b>Login</b></span>
                                <div className="col s12 center"><i className="fab fa-jedi-order fa-4x" style={{color: 'red'}}></i></div>
                                <br/>
                                <br/>
                                <div className="input-field">
                                    <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="center" style={{ color: 'red' }}>{errors.email}</div>
                                <div className="input-field">
                                    <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="center" style={{ color: 'red' }}>{errors.password}</div>
                                <div className="center" style={{ color: 'red' }}>{errors.general}</div>
                            </div>
                            <div className="card-action center">
                                <button type="submit" className="waves-effect waves-light black btn button" disabled={loading}>
                                    Submit{loading && <Progress className='progress'/>}
                                </button>
                            </div>
                        </form>
                        <div className="center">Don't have an account: Sign up <Link to="/signup">Here</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}