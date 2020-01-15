import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import ActiveUpdates from '../../views/ActiveUpdates';
import ESNList from '../../views/ESNList';
import GSMList from '../../views/GSMList';
import AddUpdate from '../../views/AddUpdate';


export default class Main extends Component {
    
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <ActiveUpdates />
                        <ESNList />
                        <GSMList />
                        <AddUpdate />
                    </div>
                </div>
            </div>
        );
    }
}