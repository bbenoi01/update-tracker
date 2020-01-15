import { connect } from 'react-redux';
import GSMList from './gsmList';

function mapStoreToProps(store) {
    return {
        requests: store.app.requests,
        onlyMine: store.app.onlyMine
    }
}

export default connect(mapStoreToProps)(GSMList);