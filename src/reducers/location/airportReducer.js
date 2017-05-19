import * as types from '../../actionTypes/';

export default function airportsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.AIRPORT_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.AIRPORT_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', airportList: action.airportList });
		case types.AIRPORT_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
			
		default:
			return state;
	}
}
