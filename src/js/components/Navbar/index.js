import { connect } from 'react-redux';
import Navbar from './navbar';

function mapStoreToProps(store){
    return {
        authenticated: store.app.authenticated,
        credentials: store.app.credentials
    }
}

export default connect(mapStoreToProps)(Navbar);