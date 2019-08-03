import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Progress from '../../components/Progress';

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
            color: this.state.color.split(" ")[1],
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            confirmPassword: this.state.confirmPassword
        };
        dispatch(signupUser(newUserData, history));
    }

    render() {
        const { errors, loading } = this.props;

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s4 offset-s4">
                            <div className="card grey darken-3 white-text">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="card-content">
                                        <span className="card-title center"><b>Signup</b></span>
                                        <div className="col s12 center"><i className="fab fa-jedi-order fa-4x" style={{ color: this.state.color.split(' ')[0] || 'red' }}></i></div>
                                        <br/>
                                        <div className="row">
                                            <div className="input-field col s6 offset-s3">
                                                <select name="color" id="color" className="browser-default" value={this.state.color} onChange={this.handleChange}>
                                                    <option value="" >Choose A Color...</option>
                                                    <option value="#f44336 red">Red</option>
                                                    <option value="#e91e63 pink">Pink</option>
                                                    <option value="#9c27b0 purple">Purple</option>
                                                    <option value="#673ab7 deep-purple">Deep Purple</option>
                                                    <option value="#3f51b5 indigo">Indigo</option>
                                                    <option value="#2196f3 blue">Blue</option>
                                                    <option value="#03a9f4 light-blue">Light Blue</option>
                                                    <option value="#00bcd4 cyan">Cyan</option>
                                                    <option value="#009688 teal">Teal</option>
                                                    <option value="#4caf50 green">Green</option>
                                                    <option value="#8bc34a light-green">Light Green</option>
                                                    <option value="#cddc39 lime">Lime</option>
                                                    <option value="#ffeb3b yellow">Yellow</option>
                                                    <option value="#ffc107 amber">Amber</option>
                                                    <option value="#ff9800 orange">Orange</option>
                                                    <option value="#ff5722 deep-orange">Deep Orange</option>
                                                    <option value="#795548 brown">Brown</option>
                                                    <option value="#9e9e9e grey">Grey</option>
                                                    <option value="#607d8b blue-grey">Blue Grey</option>
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
                                        <button className="waves-effect waves-light black btn button" type="submit"><i className="material-icons left">send</i>Submit
                                            {loading && <Progress className='progress'/>}
                                        </button>
                                    </div>
                                </form>
                                <div className="center">Already have an account: Log in <Link to="/">Here</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}