import React, { Component } from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import {
    updateCompleted
} from '../../actions/appActions';

export default class ActiveUpdates extends Component {

    handleClick = (e) => {
        const { dispatch } = this.props;
        const name = e.target.value;
        const requestId = e.target.id;
        dispatch(updateCompleted(requestId, name));
    }
    
    render() {
        dayjs.extend(relativeTime);
        const { requests, credentials } = this.props;

        return (
            <div className="col sm12 m5 l5">
                <div className="card grey darken-3 white-text">
                    <div className="card-content">
                        <span className="card-title center"><b>Active Updates</b></span>
                        <hr/>
                        <div className="card-content" id='activeUpdates'>
                            {!!requests && requests.filter(request => request.hidden === false).map(request => 
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
                                            ) : (
                                                null
                                            )}
                                        </div>
                                        <div className="card-action center">
                                            <button className="waves-effect waves-light grey darken-3 btn" value={request.processor} id={request.requestId} onClick={this.handleClick}>Complete</button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}