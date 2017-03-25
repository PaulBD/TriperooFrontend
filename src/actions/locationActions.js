import LocationApi from '../api/locationApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Location by location id
// ****************************************
export function requestLocationContent() {
	return {type: types.LOCATION_CONTENT_REQUEST, isFetching: true };
}

export function loadLocationContentSuccess(location) {
	return {type: types.LOCATION_CONTENT_SUCCESS, isFetching: false, location};
}

export function locationContentFailure(errorMessage) {
	return {type: types.LOCATION_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadLocationById(locationId) {
	return dispatch => {
		dispatch(requestLocationContent());
		return LocationApi.getLocation(locationId).then(location => {
			dispatch(loadLocationContentSuccess(location));
		}).catch(error => {
			dispatch(locationContentFailure(error.response.data));
		});
	};
}
