import ReviewsApi from '../api/reviewsApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Reviews by location Id
// ****************************************
export function requestReviews() {
	return {type: types.LOAD_REVIEWS_REQUEST, isFetching: true };
}

export function loadReviewsSuccess(reviews) {
	return {type: types.LOAD_REVIEWS_SUCCESS, isFetching: false, reviews};
}

export function loadReviewsFailure(message) {
	return {type: types.LOAD_REVIEWS_FAILURE, isFetching: false,  message};
}

export function loadReviewsByLocationId(locationId, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestReviews());
		return ReviewsApi.getReviewsByLocationId(locationId, pageSize, pageNumber).then(reviews => {
			dispatch(loadReviewsSuccess(reviews));
		}).catch(error => {
			loadReviewsFailure(error.response.data);
		});
	};
}

export function loadReviewsByType(reviewType, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestReviews());
		return ReviewsApi.getReviewsByType(reviewType, pageSize, pageNumber).then(reviews => {
			dispatch(loadReviewsSuccess(reviews));
		}).catch(error => {
			loadReviewsFailure(error.response.data);
		});
	};
}