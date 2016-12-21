import initialState from './initialState';
import * as types from '../actionTypes/';

export default function hotelDealReducer(state = initialState.deals, action) {
	switch(action.type) {
		case types.LOAD_HOTEL_DEAL_SUCCESS:
			return action.hotelDeals;
		default:
			return state;
	}
}
