import initialState from './initialState';
import * as types from '../../actionTypes/';

export default function restaurantDealReducer(state = initialState.deals, action) {
	switch(action.type) {
		case types.LOAD_RESTAURANT_DEAL_SUCCESS:
			return action.restaurantDeals;
		default:
			return state;
	}
}
