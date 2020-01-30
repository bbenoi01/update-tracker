import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import ActiveUpdates from '../../views/ActiveUpdates';
import ESNList from '../../views/ESNList';
import GSMList from '../../views/GSMList';
import AddUpdate from '../../views/AddUpdate';

import {
    getAllRequests
} from '../../actions/appActions';

export default class Main extends Component {

    componentDidMount = () => {
        const { dispatch } = this.props;
        dispatch(getAllRequests());
    }
    
    render() {
        return (
            <div>
                <Navbar/>
                <div className="row">
                    <ActiveUpdates />
                    <ESNList />
                    <GSMList />
                    <AddUpdate />
                </div>
            </div>
        );
    }
}