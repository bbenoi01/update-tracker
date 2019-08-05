import React, { Component } from 'react';

export default class ESNList extends Component {
    render() {
        const { requests, onlyMine } = this.props;

        let content;

        if(onlyMine === true) {
            content = 
                <div className="card-content">
                    <span className="card-title"><b>ESN List</b></span>
                    <hr/>
                    <div className="card-content" id="esnList">
                        {!!requests && requests.filter(request => request.processor === 'Brandon').map(request =>
                            <p className={request.color + '-text'} key={request.requestId}><b>{request.esn}</b></p>
                        )}
                    </div>
                </div>
        } else {
            content = 
                <div className="card-content">
                    <span className="card-title"><b>ESN List</b></span>
                    <hr/>
                    <div className="card-content" id="esnList">
                        {!!requests && requests.filter(request => request.hidden === false).map(request =>
                            <p className={request.color + '-text'} key={request.requestId}><b>{request.esn}</b></p>
                        )}
                    </div>
                </div>
        }

        return (
            <div className="col sm12 m3 l3">
                <div className="card grey darken-3 white-text center">
                    {content}
                </div>
            </div>
        );
    }
}