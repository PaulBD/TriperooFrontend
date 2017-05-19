import LocationApi from '../../api/location/locationApi';
import * as types from '../../actionTypes/';

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

// ****************************************
// Update Location
// ****************************************
export function requestLocationUpdate() {
	return {type: types.LOCATION_UPDATE_REQUEST, isFetching: true };
}

export function loadLocationUpdateSuccess(location) {
	return {type: types.LOCATION_UPDATE_SUCCESS, isFetching: false, location};
}

export function locationUpdateFailure(errorMessage) {
	return {type: types.LOCATION_UPDATE_FAILURE, isFetching: false,  errorMessage};
}

export function updateLocation(locationId, location) {
	return dispatch => {
		dispatch(requestLocationUpdate());
		return LocationApi.updateLocation(locationId, location).then(newLocation => {
			dispatch(loadLocationUpdateSuccess(newLocation));
		}).catch(error => {
			dispatch(locationUpdateFailure(error.response.data));
		});
	};
}

