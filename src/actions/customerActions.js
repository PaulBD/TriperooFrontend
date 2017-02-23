import CustomerApi from '../api/mockCustomerApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function requestLogin(creds) {
	return { type: types.LOGIN_REQUEST, isFetching: true, isAuthenticated: false, creds };
}

export function receiveLogin(customer) {
	return { type: types.LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, id_token: customer.token };
}

export function loginError(message) {
	return { type: types.LOGIN_FAILURE, isFetching: false, isAuthenticated: false, message }; 
}

export function requestLogout() {
	return { type: types.LOGOUT_REQUEST, isFetching: true, isAuthenticated: true };
}

export function receiveLogout() {
	return { type: types.LOGOUT_SUCCESS, isFetching: false, isAuthenticated: false };
}

export function logoutUser() {
	return dispatch => {
		dispatch(requestLogout());
		localStorage.removeItem('id_token');
		dispatch(receiveLogout());
	}; 
}

export function loginUser(creds) {
	return dispatch => {
		dispatch(requestLogin(creds));
		dispatch(beginAjaxCall());
		return CustomerApi.loginCustomer(creds.emailAddress, creds.password).then(customer => {
			localStorage.setItem('id_token', customer.token);
			dispatch(receiveLogin(customer));
		}).catch(error => {
			dispatch(loginError(error.response.statusText));
		});
	};
}

export function loginFacebookUser(creds) {
	return dispatch => {
		dispatch(requestLogin(creds));
		dispatch(beginAjaxCall());
		return CustomerApi.loginFacebookCustomer(creds.emailAddress, creds.facebookId, creds.name, creds.image).then(customer => {
			localStorage.setItem('id_token', customer.token);
			dispatch(receiveLogin(customer));
		}).catch(error => {
			dispatch(loginError(error.response.statusText));
		});
	};
}
