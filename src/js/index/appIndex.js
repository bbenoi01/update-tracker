import { connect } from 'react-redux';
import App from '../App';

function mapStoreToProps(store) {
    return {
        // users: store.app.users
    }
}

export default connect(mapStoreToProps)(App);