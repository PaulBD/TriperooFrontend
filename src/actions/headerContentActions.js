import HeaderContentApi from '../api/headerContentApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Header Content
// ****************************************
export function requestHeaderContent() {
	return { type: types.HEADER_CONTENT_REQUEST, isFetching: true };
}

export function loadHeaderContentSuccess(header) {
	return {type: types.HEADER_CONTENT_SUCCESS, isFetching: false, header};
}

export function headerContentFailure(errorMessage) {
	return {type: types.HEADER_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadHeaderContent(headerType) {
	return dispatch => {
		dispatch(requestHeaderContent());
		return HeaderContentApi.getHeaderContent(headerType).then(header => {
			dispatch(loadHeaderContentSuccess(header));
		}).catch(error => {
			dispatch(headerContentFailure(error.response.data));
		});
	};
}