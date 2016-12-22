import initialState from './initialState';
import * as types from '../actionTypes/';

export default function reviewReducer(state = initialState.reviews, action) {
	switch(action.type) {
		case types.LOAD_REVIEWS_SUCCESS:
			return action.reviews;
		case types.LOAD_GENERIC_REVIEWS_SUCCESS:
			return action.reviews;
		default:
			return state;
	}
}
