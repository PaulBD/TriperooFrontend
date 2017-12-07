import AuthenticationApi from '../../api/customer/authenticationApi';
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
			return AuthenticationApi.loginCustomer(creds.emailAddress, creds.password).then(token => {
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
		dispatch(requestLogin());
		if ((creds.emailAddress.length > 0) && (creds.facebookId.length > 0))
		{
			return AuthenticationApi.loginFacebookCustomer(creds.accessToken, creds.emailAddress, creds.facebookId, creds.name, creds.imageUrl, creds.city, creds.cityId).then(token => {

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

export function getFacebookUser(creds) {
  return dispatch => {
    dispatch(requestFacebookUser());
    if ((creds.emailAddress.length > 0) && (creds.facebookId.length > 0))
    {
      return AuthenticationApi.getFacebookUser(creds.emailAddress, creds.facebookId).then(user => {
        dispatch(receiveFacebookUser(user));
      }).catch(error => {
        dispatch(facebookUserFailure(error.response.data));
      });
    }
    else {
      dispatch(facebookUserFailure("Please specify a valid email address"));
    }
  };
}

// ****************************************
// Login
// ****************************************
export function requestFacebookUser() {
  return { type: types.FACEBOOK_USER_REQUEST, isFetching: true, isAuthenticated: false };
}

export function receiveFacebookUser(user) {
  return { type: types.FACEBOOK_USER_SUCCESS, isFetching: false, isAuthenticated: user.userProfile != undefined, user };
}

export function facebookUserFailure(message) {
  return { type: types.FACEBOOK_USER_FAILURE, isFetching: false, isAuthenticated: false, message };
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
    dispatch(requestResetPassword());
    if (creds.emailAddress.length > 0)
    {
      return AuthenticationApi.resetPassword(creds.emailAddress).then(response => {
        dispatch(receiveResetPassword());
      }).catch(error => {
        dispatch(resetPasswordFailure(error.response.data));
      });
    }
    else {
      dispatch(resetPasswordFailure("Please specify a valid email address"));
    }
  };
}

export function requestUpdatePassword() {
  return { type: types.UPDATE_PASSWORD_REQUEST, isFetching: true, isAuthenticated: false, hasUpdatedPassword: false };
}

export function receiveUpdatePassword() {
  return { type: types.UPDATE_PASSWORD_SUCCESS, isFetching: false, isAuthenticated: false, hasUpdatedPassword: true };
}

export function resetUpdatePasswordFailure(message) {
  return { type: types.UPDATE_PASSWORD_FAILURE, isFetching: false, isAuthenticated: false, hasUpdatedPassword: false, message };
}

export function updatePassword(creds, encryptedGuid) {
  return dispatch => {
    dispatch(requestUpdatePassword());
    if (creds.newPassword.length > 0)
    {
      return AuthenticationApi.updatePassword(creds.newPassword, encryptedGuid).then(response => {
        dispatch(receiveUpdatePassword());
      }).catch(error => {
        dispatch(resetUpdatePasswordFailure(error.response.data));
      });
    }
    else {
      dispatch(resetUpdatePasswordFailure("Please specify a valid email address"));
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
			return AuthenticationApi.registerCustomer(creds.emailAddress, creds.password, creds.name, creds.city, creds.cityId, creds.optIn).then(token => {
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
		localStorage.setItem('id_token', '');
		dispatch(receiveLogout());
	};
}

// ****************************************
// Transform Authentication
// ****************************************
export function transformAuthentication(response) {
	return  { "token": response.token, "userName": response.userName, "userImage": response.userImage, "userProfile": response.baseUrl, "userId": response.userId, "isNewUser": response.isNewUser, "currentLocationId": response.currentLocationId };
}
