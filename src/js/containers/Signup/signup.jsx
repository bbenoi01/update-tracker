import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
    signupUser
} from '../../actions/appActions';

export default class Signup extends Component {
    constructor(props) {
        super(props);

        this.state = {
            color: '',
            firstName: '',
            lastName: '',
            email: '',
            password: '', 
            confirmPassword: ''
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
        const newUserData = {
            color: this.state.color,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        dispatch(signupUser(newUserData, history));
    }

    render() {
        const { errors } = this.props;

        return (
            <div className="row">
                <div className="col s4 offset-s4">
                    <div className="card grey darken-3 white-text">
                        <form onSubmit={this.handleSubmit}>
                            <div className="card-content">
                                <span className="card-title center"><b>Signup</b></span>
                                <div className="col s12 center"><i className="fab fa-jedi-order fa-4x" style={{color: 'red'}}></i></div>
                                <br/>
                                <div className="row">
                                    <div className="input-field col s6 offset-s3">
                                        <select name="color" id="color" className="browser-default" value={this.state.color} onChange={this.handleChange}>
                                            <option value="" >Choose A Color...</option>
                                            <option value="red">Red</option>
                                            <option value="pink">Pink</option>
                                            <option value="purple">Purple</option>
                                            <option value="deep-purple">Deep Purple</option>
                                            <option value="indigo">Indigo</option>
                                            <option value="blue">Blue</option>
                                            <option value="light-blue">Light Blue</option>
                                            <option value="cyan">Cyan</option>
                                            <option value="teal">Teal</option>
                                            <option value="green">Green</option>
                                            <option value="light-green">Light Green</option>
                                            <option value="lime">Lime</option>
                                            <option value="yellow">Yellow</option>
                                            <option value="amber">Amber</option>
                                            <option value="orange">Orange</option>
                                            <option value="deep-orange">Deep Orange</option>
                                            <option value="brown">Brown</option>
                                            <option value="grey">Grey</option>
                                            <option value="blue-grey">Blue Grey</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s6">
                                        <div className="input-field">
                                            <input id="firstName" name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange}/>
                                            <label htmlFor="firstName">First Name</label>
                                        </div>
                                    <div className="center" style={{ color: 'red' }}>{errors.firstName}</div>
                                    </div>
                                    <div className="col s6">
                                        <div className="input-field">
                                            <input id="lastName" name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange}/>
                                            <label htmlFor="lastName">Last Name</label>
                                        </div>
                                    <div className="center" style={{ color: 'red' }}>{errors.lastName}</div>
                                    </div>
                                </div>
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
                                <div className="input-field">
                                    <input id="confirmPassword" name="confirmPassword" type="password" value={this.state.confirmPassword} onChange={this.handleChange}/>
                                    <label htmlFor="confirmPassword">Confirm Password</label>
                                </div>
                                <div className="center" style={{ color: 'red' }}>{errors.confirmPassword}</div>
                                <div className="center" style={{ color: 'red' }}>{errors.general}</div>
                            </div>
                            <div className="card-action center">
                                <button type="submit" className="waves-effect waves-light black btn">Submit</button>
                            </div>
                        </form>
                        <div className="center">Already have an account: Log in <Link to="/">Here</Link></div>
                    </div>
                </div>
            </div>
        );
    }
}