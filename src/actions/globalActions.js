import * as types from '../actionTypes/';

// ****************************************
// Open review
// ****************************************
export function openReviewModel(locationId) {
	return {type: types.OPEN_REVIEW_MODEL, locationId: locationId};
}

export function openReview(locationId) {
	return dispatch => {
		dispatch(openReviewModel(locationId));
	};
}