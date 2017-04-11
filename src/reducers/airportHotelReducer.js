import * as types from '../actionTypes/';

export default function airportHotelReducer(state = { isFetching: false }, action) {
	switch(action.type) {

		case types.AIRPORT_HOTEL_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.AIRPORT_HOTEL_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', airportHotel: action.airportHotel });
		case types.AIRPORT_HOTEL_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
		default:
			return state;
	}
}
