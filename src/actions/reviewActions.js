import ReviewApi from '../api/mockReviewApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadReviewSuccess(reviews) {
	return {type: types.LOAD_REVIEWS_SUCCESS, reviews};
}

export function loadReviews(type, id, limit, offset) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return ReviewApi.getReviews(type, id, limit, offset).then(reviews => {
			dispatch(loadReviewSuccess(reviews));
		}).catch(error => {
			throw(error);
		});
	};
}

export function loadGenericReviewSuccess(reviews) {
	return {type: types.LOAD_GENERIC_REVIEWS_SUCCESS, reviews};
}

export function loadGenericReviews(type, id, limit, offset) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return ReviewApi.getGenericReviews(type, id, limit, offset).then(reviews => {
			dispatch(loadGenericReviewSuccess(reviews));
		}).catch(error => {
			throw(error);
		});
	};
}