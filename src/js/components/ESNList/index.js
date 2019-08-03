import { connect } from 'react-redux';
import ESNList from './esnList';

function mapStoreToProps(store) {
    return {
        requests: store.app.requests
    }
}

export default connect(mapStoreToProps)(ESNList);