import { connect } from 'react-redux';
import AddUpdate from './addUpdate';

function mapStoreToProps(store) {
    return {
        credentials: store.app.credentials
    }
}

export default connect(mapStoreToProps)(AddUpdate);