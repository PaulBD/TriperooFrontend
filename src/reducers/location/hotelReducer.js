import * as types from '../../actionTypes/';

export default function hotelsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.HOTEL_DEALS_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.HOTEL_DEALS_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', hotelDeals: action.hotelDeals });
		case types.HOTEL_DEALS_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
			
		default:
			return state;
	}
}
