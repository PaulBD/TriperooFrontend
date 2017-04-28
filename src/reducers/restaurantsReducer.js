import * as types from '../actionTypes/';

export default function restaurantsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.RESTAURANT_CONTENT_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.RESTAURANT_CONTENT_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', restaurantsList: action.restaurantsList });
		case types.RESTAURANT_CONTENT_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

		default:
			return state;
	}
}
