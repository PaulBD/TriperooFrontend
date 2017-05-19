import * as types from '../../actionTypes/';

export default function flightsReducer(state = { isFetching: false }, action) {
	switch(action.type) {

		case types.SEARCH_FLIGHTS_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.SEARCH_FLIGHTS_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', flights: action.flights });
		case types.SEARCH_FLIGHTS_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
		default:
			return state;
	}
}
