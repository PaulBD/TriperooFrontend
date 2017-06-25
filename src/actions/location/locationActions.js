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
// Like Location
// ****************************************
export function requestLikeLocationContent() {
  return {type: types.LIKE_LOCATION_CONTENT_REQUEST, isFetching: true };
}

export function loadLikeLocationContentSuccess(location) {
  return {type: types.LIKE_LOCATION_CONTENT_SUCCESS, isFetching: false, location};
}

export function likeLocationContentFailure(errorMessage) {
  return {type: types.LIKE_LOCATION_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function likeLocationById(locationId, likeLocation, location) {
  return dispatch => {
    dispatch(requestLikeLocationContent());
    return LocationApi.likeLocation(locationId, likeLocation).then(response => {
      dispatch(loadLikeLocationContentSuccess(location));
    }).catch(error => {
      dispatch(likeLocationContentFailure(error.response.data));
    });
  };
}
