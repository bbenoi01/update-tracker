import { connect } from 'react-redux';
import ActiveUpdates from './activeUpdates';

function mapStoreToProps(store) {
    return {
        requests: store.app.requests,
        credentials: store.app.credentials
    }
}

export default connect(mapStoreToProps)(ActiveUpdates);