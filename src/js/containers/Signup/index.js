import { connect } from "react-redux";
import Signup from './signup';

function mapStoreToProps(store) {
    return {
        errors: store.app.errors,
        loading: store.app.loading
    }
}

export default connect(mapStoreToProps)(Signup);