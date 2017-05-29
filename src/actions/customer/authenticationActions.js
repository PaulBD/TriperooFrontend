import CustomerApi from '../../api/customer/authenticationApi';
import * as types from '../../actionTypes/';
let stringify = require('json-stable-stringify');

// ****************************************
// Login
// ****************************************
export function requestLogin() {
	return { type: types.LOGIN_REQUEST, isFetching: true, isAuthenticated: false };
}

export function receiveLogin() {
	return { type: types.LOGIN_SUCCESS, isFetching: false, isAuthenticated: true };
}

export function loginFailure(message) {
	return { type: types.LOGIN_FAILURE, isFetching: false, isAuthenticated: false, message };
}

export function loginUser(creds) {
	return dispatch => {
		dispatch(requestLogin());
		if ((creds.emailAddress.length > 0) && (creds.password.length > 0))
		{
			return CustomerApi.loginCustomer(creds.emailAddress, creds.password).then(token => {
				localStorage.setItem('id_token', stringify(transformAuthentication(token)));
				dispatch(receiveLogin(token));
			}).catch(error => {
				dispatch(loginFailure(error.response.data));
			});
		}
		else {
			dispatch(loginFailure("Please specify valid credentials"));
		}
	};
}

export function loginFacebookUser(creds) {
	return dispatch => {
		dispatch(requestLogin(creds));
		if ((creds.emailAddress.length > 0) && (creds.facebookId.length > 0))
		{
			return CustomerApi.loginFacebookCustomer(creds.emailAddress, creds.facebookId, creds.name, creds.imageUrl, creds.city, creds.cityId).then(token => {
				localStorage.setItem('id_token', stringify(transformAuthentication(token)));
				dispatch(receiveLogin());
			}).catch(error => {
        dispatch(loginFailure(error.response.data));
			});
		}
		else {
			dispatch(loginFailure("Please specify a valid email address"));
		}
	};
}

// ****************************************
// Reset Password
// ****************************************
export function requestResetPassword() {
  return { type: types.PASSWORD_REQUEST, isFetching: true, isAuthenticated: false, hasSentPassword: false };
}

export function receiveResetPassword() {
  return { type: types.PASSWORD_SUCCESS, isFetching: false, isAuthenticated: false, hasSentPassword: true };
}

export function resetPasswordFailure(message) {
  return { type: types.PASSWORD_FAILURE, isFetching: false, isAuthenticated: false, hasSentPassword: false, message };
}

export function resetPassword(creds) {
  return dispatch => {
    dispatch(requestLogin());
    if (creds.emailAddress.length > 0)
    {
      return CustomerApi.resetPassword(creds.emailAddress).then(response => {
        dispatch(receiveLogin());
      }).catch(error => {
        dispatch(loginFailure(error.response.data));
      });
    }
    else {
      dispatch(loginFailure("Please specify a valid email address"));
    }
  };
}

// ****************************************
// Registration
// ****************************************
export function requestRegistration() {
	return { type: types.REGISTRATION_REQUEST, isFetching: true, isAuthenticated: false };
}

export function receiveRegistration() {
	return { type: types.REGISTRATION_SUCCESS, isFetching: false, isAuthenticated: true };
}

export function registrationFailure(message) {
	return { type: types.REGISTRATION_FAILURE, isFetching: false, isAuthenticated: false, message };
}

export function registerUser(creds) {
	return dispatch => {
		dispatch(requestRegistration());
		if ((creds.name.length > 0) && (creds.cityId > 0) && (creds.emailAddress.length > 0) && (creds.password.length > 0))
		{
      console.log(creds);
			return CustomerApi.registerCustomer(creds.emailAddress, creds.password, creds.name, creds.city, creds.cityId).then(token => {
				localStorage.setItem('id_token', stringify(transformAuthentication(token)));
				dispatch(receiveRegistration(token));
			}).catch(error => {
				dispatch(registrationFailure(error.response.data));
			});
		}
		else {
			dispatch(registrationFailure("Please complete the registration form"));
		}
	};
}


// ****************************************
// Log Out
// ****************************************
export function requestLogout() {
	return { type: types.LOGOUT_REQUEST, isFetching: true, isAuthenticated: true };
}

export function receiveLogout() {
	return { type: types.LOGOUT_SUCCESS, isFetching: false, isAuthenticated: false, hasSentPassword: true };
}

export function logoutUser() {
	return dispatch => {
		dispatch(requestLogout());
		localStorage.removeItem('id_token');
		dispatch(receiveLogout());
	};
}

// ****************************************
// Transform Authentication
// ****************************************
export function transformAuthentication(response)
{
	return  { "token": response.token, "userName": response.userName, "userImage": response.userImage, "userProfile": response.baseUrl, "userId": response.userId };
}
