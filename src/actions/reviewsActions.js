import ReviewApi from '../api/reviewsApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadReviewsSuccess(reviews) {
	return {type: types.LOAD_REVIEWS_SUCCESS, reviews};
}

export function loadReviews(id, type, limit, offset) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return ReviewApi.getReviews(id, type, limit, offset).then(reviews => {
			dispatch(loadReviewsSuccess(reviews));
		}).catch(error => {
			throw(error);
		});
	};
}