import React, { Component } from 'react';
import ActiveUpdates from '../../components/ActiveUpdates';
import ESNList from '../../components/ESNList';
import AddUpdate from '../../components/AddUpdate';


export default class Main extends Component {
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <ActiveUpdates />
                        <ESNList />
                        <AddUpdate />
                    </div>
                </div>
            </div>
        );
    }
}