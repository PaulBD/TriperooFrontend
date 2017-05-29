import * as types from '../../actionTypes/';

export default function authenticationReducer(state = { isFetching: false, isAuthenticated: localStorage.getItem('id_token') ? true : false }, action) {
  switch(action.type) {

    case types.LOGIN_REQUEST:
      return Object.assign({}, state, { isFetching: true, isAuthenticated: false, hasSentPassword: false });
    case types.LOGIN_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isAuthenticated: true, hasSentPassword: false, errorMessage: '' });
    case types.LOGIN_FAILURE:
      return Object.assign({}, state, { isFetching: false, isAuthenticated: false, hasSentPassword: false, errorMessage: action.message });

    case types.REGISTRATION_REQUEST:
      return Object.assign({}, state, { isFetching: true, isAuthenticated: false, hasSentPassword: false });
    case types.REGISTRATION_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isAuthenticated: true, hasSentPassword: false, errorMessage: '' });
    case types.REGISTRATION_FAILURE:
      return Object.assign({}, state, { isFetching: false, isAuthenticated: false, hasSentPassword: false, errorMessage: action.message });

    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isAuthenticated: false, hasSentPassword: false });

    case types.PASSWORD_REQUEST:
      return Object.assign({}, state, { isFetching: true, isAuthenticated: false, hasSentPassword: false });
    case types.PASSWORD_SUCCESS:
      return Object.assign({}, state, { isFetching: false, isAuthenticated: false, hasSentPassword: true });
    case types.PASSWORD_FAILURE:
      return Object.assign({}, state, { isFetching: false, isAuthenticated: false, hasSentPassword: false, errorMessage: action.message });

    default:
      return state;
	}
}
