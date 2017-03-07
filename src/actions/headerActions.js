import HeaderApi from '../api/headerApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadHeaderSuccess(header) {
	return {type: types.LOAD_HEADER_SUCCESS, header};
}

export function loadHeader(headerType) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return HeaderApi.getHeader(headerType).then(header => {
			dispatch(loadHeaderSuccess(header));
		}).catch(error => {
			throw(error);
		});
	};
}

export function loadLastMinuteDealSuccess(features) {
	return {type: types.LOAD_LAST_MINUTE_FEATURE_SUCCESS, features};
}

export function loadLastMinuteDeal(featureType) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return HeaderApi.getHeader(featureType).then(features => {
			dispatch(loadLastMinuteDealSuccess(features));
		}).catch(error => {
			throw(error);
		});
	};
}