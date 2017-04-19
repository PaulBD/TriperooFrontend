import AttractionsApi from '../api/attractionsApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Attractions by parent location id
// ****************************************
export function requestAttractionsContent() {
	return {type: types.ATTRACTION_CONTENT_REQUEST, isFetching: true };
}

export function attractionsContentSuccess(attractionsList) {
	return {type: types.ATTRACTION_CONTENT_SUCCESS, isFetching: false, attractionsList};
}

export function attractionsContentError(errorMessage) {
	return {type: types.ATTRACTION_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadAttractionsByParentLocationId(parentLocationId, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestAttractionsContent());
		return AttractionsApi.getAttractionsByParentLocationId(parentLocationId, pageSize, pageNumber).then(attractionsList => {
			dispatch(attractionsContentSuccess(attractionsList));
		}).catch(error => {
			dispatch(attractionsContentError(error.response.data));
		});
	};
}
