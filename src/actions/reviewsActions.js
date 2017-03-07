import ReviewApi from '../api/mockReviewsApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadReviewsSuccess(reviews) {
	return {type: types.LOAD_REVIEWS_SUCCESS, reviews};
}

export function loadReviews(type, id, limit, offset) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return ReviewApi.getReviews(type, id, limit, offset).then(reviews => {
			dispatch(loadReviewsSuccess(reviews));
		}).catch(error => {
			throw(error);
		});
	};
}