import LocationsApi from '../api/locationsApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function locationRequest() {
	return {type: types.REVIEW_REQUEST, locations: []};
}

export function loadLocationsSuccess(locations) {
	return {type: types.LOAD_LOCATIONS_SUCCESS, locations};
}

export function loadLocations(parentId, type, limit, offset) {
	return dispatch => {
		dispatch(locationRequest());
		dispatch(beginAjaxCall());
		return LocationsApi.getLocations(parentId, type, limit, offset).then(locations => {
			dispatch(loadLocationsSuccess(locations));
		}).catch(error => {
			throw(error);
		});
	};
}
