import * as types from '../actionTypes/';

export default function airportLoungeReducer(state = { isFetching: false }, action) {
	switch(action.type) {

		case types.AIRPORT_LOUNGE_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.AIRPORT_LOUNGE_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', airportLounge: action.airportLounge, isError: action.isError, error: action.error });
		case types.AIRPORT_LOUNGE_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
		default:
			return state;
	}
}
