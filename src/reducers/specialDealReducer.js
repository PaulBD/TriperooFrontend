import initialState from './initialState';
import * as types from '../actionTypes/';

export default function specialDealReducer(state = initialState.deals, action) {
	switch(action.type) {
		case types.LOAD_SPECIAL_DEAL_SUCCESS:
			return action.specialDeals;
		default:
			return state;
	}
}
