import { connect } from 'react-redux';
import Navbar from './navbar';

function mapStoreToProps(store){
    return {
        authenticated: store.app.authenticated,
        // name: store.app.credentials.firstName
    }
}

export default connect(mapStoreToProps)(Navbar);