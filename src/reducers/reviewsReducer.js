import initialState from './initialState';
import * as types from '../actionTypes/';

export default function reviewsReducer(state = initialState.reviews, action) {


	switch(action.type) {
		case types.LOAD_REVIEWS_SUCCESS:
			return action.reviews;
		default:
			return state;
	}
}
