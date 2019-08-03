import { connect } from 'react-redux';
import ActiveUpdates from './activeUpdates';

function mapStoreToProps(store) {
    return {
        requests: store.app.requests,
        credentials: store.app.credentials,
        onlyMine: store.app.onlyMine
    }
}

export default connect(mapStoreToProps)(ActiveUpdates);