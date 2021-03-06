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

export function loadLocationById(locationId, isCity) {
	return dispatch => {
		dispatch(requestLocationContent());
		return LocationApi.getLocation(locationId, isCity).then(location => {
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

export function likeLocationById(locationId, likeLocation, isCity) {
  return dispatch => {
    dispatch(requestLikeLocationContent());
    return LocationApi.likeLocation(locationId, likeLocation, isCity).then(response => {
      dispatch(loadLikeLocationContentSuccess(location));
    }).catch(error => {
      dispatch(likeLocationContentFailure(error.response.data));
    });
  };
}


// ****************************************
// Upload Location photo
// ****************************************
export function requestUploadLocationPhoto() {
  return {type: types.UPLOAD_PHOTO_LOCATION_REQUEST, isFetching: true };
}

export function uploadLocationPhotoSuccess() {
  return {type: types.UPLOAD_PHOTO_LOCATION_SUCCESS, isFetching: false};
}

export function uploadLocationPhotoFailure(errorMessage) {
  return {type: types.UPLOAD_PHOTO_LOCATION_FAILURE, isFetching: false,  errorMessage};
}

export function uploadPhotos(locationId, photos) {
  return dispatch => {
    dispatch(requestUploadLocationPhoto());
    return LocationApi.uploadPhotos(locationId, photos).then(response => {
      dispatch(uploadLocationPhotoSuccess());
    }).catch(error => {
      dispatch(uploadLocationPhotoFailure(error.response.data));
    });
  };
}
