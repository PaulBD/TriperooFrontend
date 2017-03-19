import LocationApi from '../api/locationApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadLocationSuccess(location) {
	return {type: types.LOAD_LOCATION_SUCCESS, location};
}

export function loadLocation(id) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return LocationApi.getLocation(id).then(location => {
			dispatch(loadLocationSuccess(location));
		}).catch(error => {
			throw(error);
		});
	};
}
