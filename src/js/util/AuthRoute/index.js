import { connect } from "react-redux";
import AuthRoute from './authRoute';

function mapStoreToProps(store) {
    return {
        authenticated: store.app.authenticated
    }
}

export default connect(mapStoreToProps)(AuthRoute);