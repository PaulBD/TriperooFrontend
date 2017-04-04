import * as types from '../actionTypes/';

export default function airportParkingReducer(state = { isFetching: false }, action) {
	switch(action.type) {

		case types.AIRPORT_PARKING_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.AIRPORT_PARKING_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', airportParking: action.airportParking });
		case types.AIRPORT_PARKING_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
		default:
			return state;
	}
}
