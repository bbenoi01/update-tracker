import React, { Component } from 'react';

export default class GSMList extends Component {
    render() {
        const { requests, onlyMine } = this.props;

        let content;

        if(onlyMine === true) {
            content = 
                <div className="card-content">
                    <span className="card-title"><b>GSM List</b></span>
                    <hr/>
                    <div className="card-content" id="gsmList">
                        {!!requests && requests.filter(request => request.processor === 'Brandon').map(request =>
                            <p className={request.color + '-text'} key={request.requestId}><b>{request.gsm}</b></p>
                        )}
                    </div>
                </div>
        } else {
            content = 
                <div className="card-content">
                    <span className="card-title"><b>GSM List</b></span>
                    <hr/>
                    <div className="card-content" id="gsmList">
                        {!!requests && requests.filter(request => request.hidden === false).map(request =>
                            <p className={request.color + '-text'} key={request.requestId}><b>{request.gsm}</b></p>
                        )}
                    </div>
                </div>
        }

        return (
            <div className="col s12 m3 l3">
                <div className="card grey darken-3 white-text center">
                    {content}
                </div>
            </div>
        );
    }
}