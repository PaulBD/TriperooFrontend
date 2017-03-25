import CustomerApi from '../api/authenticationApi';
import * as types from '../actionTypes/';
var stringify = require('json-stable-stringify');

// ****************************************
// Login
// ****************************************
export function requestLogin(creds) {
	return { type: types.LOGIN_REQUEST, isFetching: true, isAuthenticated: false, creds };
}

export function receiveLogin(customer) {
	return { type: types.LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, id_token: customer.token };
}

export function loginFailure(message) {
	return { type: types.LOGIN_FAILURE, isFetching: false, isAuthenticated: false, message }; 
}

export function loginUser(creds) {
	return dispatch => {
		dispatch(requestLogin(creds));
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
			return CustomerApi.loginFacebookCustomer(creds.emailAddress, creds.facebookId, creds.name, creds.imageUrl, creds.currentCityId).then(token => {
				localStorage.setItem('id_token', stringify(transformAuthentication(token)));
				dispatch(receiveLogin(token));
			}).catch(error => {
				dispatch(loginFailure(error.response.data));
			});		
		}
		else {
			dispatch(loginFailure("Please sepcify a valid email address"));
		}
	};
}

// ****************************************
// Registration
// ****************************************
export function requestRegistration(creds) {
	return { type: types.REGISTRATION_REQUEST, isFetching: true, isAuthenticated: false, creds };
}

export function receiveRegistration(customer) {
	return { type: types.REGISTRATION_SUCCESS, isFetching: false, isAuthenticated: true, id_token: customer.token };
}

export function registrationFailure(message) {
	return { type: types.REGISTRATION_FAILURE, isFetching: false, isAuthenticated: false, message }; 
}

export function registerUser(creds) {
	return dispatch => {
		dispatch(requestRegistration(creds));
		if ((creds.firstName.length > 0) && (creds.lastName.length > 0) && (creds.currentCityId.length > 0) && (creds.emailAddress.length > 0) && (creds.password.length > 0))
    	{
			return CustomerApi.registerCustomer(creds.emailAddress, creds.password, creds.firstName, creds.lastName, creds.currentCityId).then(token => {
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
// Reset Password
// ****************************************
export function requestResetPassword(creds) {
	return { type: types.PASSWORD_REQUEST, isFetching: true, isAuthenticated: false, hasSentPassword: false, creds };
}

export function receiveResetPassword() {
	return { type: types.PASSWORD_SUCCESS, isFetching: false, isAuthenticated: false, hasSentPassword: true };
}

export function resetPasswordFailure(message) {
	return { type: types.PASSWORD_FAILURE, isFetching: false, isAuthenticated: false, hasSentPassword: false, message }; 
}

export function resetPassword(creds) {
	return dispatch => {
		dispatch(requestResetPassword(creds));
		if (creds.emailAddress.length > 0)
		{
			return CustomerApi.resetPassword(creds.emailAddress).then(response => {
				dispatch(receiveResetPassword());
			}).catch(error => {
				dispatch(resetPasswordFailure(error.response.data));
			});
		}
		else {
			dispatch(resetPasswordFailure("Please sepcify a valid email address"));
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
	return  { "token": response.token, "userName": response.userName, "userImage": response.userImage };
}