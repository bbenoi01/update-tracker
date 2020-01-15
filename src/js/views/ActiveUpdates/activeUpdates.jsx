import React, { Component } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
    updateCompleted,
    toggleCheckbox
} from '../../actions/appActions';

export default class ActiveUpdates extends Component {

    handleChange = (e) => {
        const { dispatch } = this.props;
        const { checked } = e.target;
        dispatch(toggleCheckbox(checked));
    }

    handleClick = (e) => {
        const { dispatch, credentials } = this.props;
        const name = credentials.lastName;
        const requestId = e.target.id;
        console.log('name', name);
        dispatch(updateCompleted(requestId, name));
    }
    
    render() {
        dayjs.extend(relativeTime);
        const { requests, credentials, onlyMine } = this.props;
        console.log('mine', onlyMine);

        return (
            <div className="col s12 m4 l4">
                <div className="card grey darken-3 white-text">
                    <div className="card-content">
                        <span className="card-title center"><b>Active Updates</b>
                            {!!credentials && credentials.lastName === 'Benoit' ? (
                            <p style={{float: 'right'}}>
                                <label>
                                    <input type="checkbox" onChange={this.handleChange}/>
                                    <span>Mine</span>
                                </label>
                            </p>
                            ) : null 
                            }
                        </span>
                        <hr/>
                        <div className="card-content" id='activeUpdates'>
                            {onlyMine === true ? requests.filter(request => request.processor === 'Brandon').map(request =>
                                <div className="col s12" key={request.requestId}>
                                    <div className="card black">
                                        <div className="card-content">
                                            <div className="row" style={{marginBottom: 0}}>
                                                <div className="col">
                                                    <p className={request.color + '-text'}><b className="white-text">ESN:</b> {request.esn}</p>
                                                </div>
                                                <div className="col">
                                                    <p className="red-text"><b className="white-text">Rep:</b> {request.requestor}</p>
                                                </div>
                                            </div>
                                            <p className={request.color + '-text'}><b className="white-text">GSM:</b> {request.gsm}</p>
                                            <p className="red-text"><b className="white-text">Started:</b> {dayjs(request.created).format('MM/DD/YY') + ' '}<small className="white-text">{' ' + dayjs(request.created).fromNow()}</small></p>
                                            <p className={request.color + '-text'}><b className="white-text">Processed By:</b> {request.processor}</p>
                                        </div>
                                        <div className="card-action center">
                                            <button className="waves-effect waves-light grey darken-3 btn" id={request.requestId} onClick={this.handleClick}>Complete</button>
                                        </div>
                                    </div>
                                </div>
                            ) : (!!requests && requests.map(request =>
                                <div className="col s12" key={request.requestId}>
                                    <div className="card black">
                                        <div className="card-content">
                                            <div className="row" style={{marginBottom: 0}}>
                                                <div className="col">
                                                    <p className={request.color + '-text'}><b className="white-text">ESN:</b> {request.esn}</p>
                                                </div>
                                                <div className="col">
                                                    <p className="red-text"><b className="white-text">Rep:</b> {request.requestor}</p>
                                                </div>
                                            </div>
                                            <p className={request.color + '-text'}><b className="white-text">GSM:</b> {request.gsm}</p>
                                            <p className="red-text"><b className="white-text">Started:</b> {dayjs(request.created).format('MM/DD/YY') + ' '}<small className="white-text">{' ' + dayjs(request.created).fromNow()}</small></p>
                                            {credentials.firstName === 'Brandon' ? (
                                                <p className={request.color + '-text'}><b className="white-text">Processed By:</b> {request.processor}</p>
                                            ) : null }
                                        </div>
                                        <div className="card-action center">
                                            <button className="waves-effect waves-light grey darken-3 btn" id={request.requestId} onClick={this.handleClick}>Complete</button>
                                        </div>
                                    </div>
                                </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}