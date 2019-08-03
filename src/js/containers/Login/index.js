import { connect } from 'react-redux';
import Login from './login';

function mapStoreToProps(store) {
    return {
        errors: store.app.errors,
        loading: store.app.loading
    }
}
export default connect(mapStoreToProps)(Login);
