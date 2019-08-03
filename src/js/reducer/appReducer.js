import { types } from '../types';

const INITIAL_STATE = {
    authenticated: false,
    loading: false,
    errors: {},
    credentials: {},
    requests: []
};

export default function AppReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case (types.SET_AUTHENTICATED): {
            return {
                ...state,
                authenticated: true
            };
        }

        case (types.SET_UNAUTHENTICATED): {
            return {
                INITIAL_STATE
            };
        }

        case (types.SET_USER): {
            return {
                authenticated: true,
                loading: false,
                ...payload
            };
        }

        case (types.LOADING_USER): {
            return {
                ...state,
                loading: false
            };
        }

        case (types.SET_ERRORS): {
            return {
                ...state,
                loading: false,
                errors: payload
            };
        }

        case (types.CLEAR_ERRORS): {
            return {
                ...state,
                loading: false,
                errors: {}
            };
        }

        case (types.LOADING_UI): {
            return {
                ...state,
                loading: true
            };
        }

        case (types.GET_ALL_REQUESTS): {
            return {
                ...state,
                requests: payload
            }
        }

        case (types.GET_USER_REQUESTS): {
            return {
                ...state,
                requests: payload
            }
        }
        
        default: return state;
    }
};