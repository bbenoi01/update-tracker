import { connect } from "react-redux";
import Signup from './signup';

function mapStoreToProps(store) {
    return {
        errors: store.app.errors
    }
}

export default connect(mapStoreToProps)(Signup);