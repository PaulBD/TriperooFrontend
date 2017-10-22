import PointOfInterestApi from '../../../api/location/travelContent/pointofinterestApi';
import * as types from '../../../actionTypes/';

// ****************************************
// Load Attractions by parent location id
// ****************************************
export function requestPointOfInterestContent() {
	return {type: types.POI_CONTENT_REQUEST, isFetching: true };
}

export function pointOfInterestContentSuccess(pointOfInterestsList) {
	return {type: types.POI_CONTENT_SUCCESS, isFetching: false, pointOfInterestsList};
}

export function pointOfInterestContentError(errorMessage) {
	return {type: types.POI_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadPointOfInterestsByParentLocationId(locationId, categoryName, pointOfInterestName, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestPointOfInterestContent());
		return PointOfInterestApi.getPointOfInterestsByParentLocationId(locationId, categoryName, pointOfInterestName, pageSize, pageNumber).then(pointOfInterestList => {
			dispatch(pointOfInterestContentSuccess(pointOfInterestList));
		}).catch(error => {
			dispatch(pointOfInterestContentError(error.response.data));
		});
	};
}
