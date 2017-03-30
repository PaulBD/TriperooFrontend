import * as types from '../actionTypes/';

export default function reviewsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.LOAD_REVIEWS_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.LOAD_REVIEWS_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', reviewList: action.reviews });
		case types.LOAD_REVIEWS_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
		default:
			return state;
	}
}
