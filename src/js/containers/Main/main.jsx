import React, { Component } from 'react';
import ActiveUpdates from '../../components/ActiveUpdates';
import ESNList from '../../components/ESNList';
import AddUpdate from '../../components/AddUpdate';
import Navbar from '../../components/Navbar';


export default class Main extends Component {
    
    render() {
        return (
            <div>
                <Navbar/>
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