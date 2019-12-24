import React, { Component } from 'react';

import {
    addUpdateRequest
} from '../../actions/appActions';

export default class AddUpdate extends Component {
    constructor(props) {
        super(props);

        this.state = {
            esn: '',
            gsm: '',
            requestor: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        const { dispatch, credentials } = this.props;
        const name = credentials.lastName;
        const newRequestData = {
            esn: this.state.esn,
            gsm: this.state.gsm,
            requestor: this.state.requestor
        }
        dispatch(addUpdateRequest(newRequestData, name));
        this.setState({
            esn: '',
            gsm: '',
            requestor: ''
        })
    }

    render() {

        return (
            <div className="col s12 m4 l4" style={{marginBottom: '0'}}>
                <form id="addForm" onSubmit={this.handleClick}>
                    <div className="card grey darken-3 white-text">
                        <div className="card-content">
                            <span className="card-title center"><b>New Xirgo Update</b></span>
                            <hr/>
                            <br/>
                            <div className="row">
                                <div className="input-field col s6">
                                    <input id="esn" name="esn" value={this.state.esn} type="text" minLength="9" maxLength="9" className="validate white-text" onChange={this.handleChange} />
                                    <label htmlFor="esn">ESN</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="gsm" name="gsm" value={this.state.gsm} type="text" minLength="10" maxLength="15"  className="validate white-text" onChange={this.handleChange} />
                                    <label htmlFor="gsm">GSM</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input id="requestor" name="requestor" value={this.state.requestor} type="text" className="validate white-text" onChange={this.handleChange} />
                                    <label htmlFor="requestedBy">Requested By</label>
                                </div>
                            </div>
                        </div>
                        <div className="card-action center">
                            <button className="waves-effect waves-light black btn" type="submit"><i className="material-icons left">send</i>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}