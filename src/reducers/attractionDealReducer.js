import initialState from './initialState';
import * as types from '../actionTypes/';

export default function attractionDealReducer(state = initialState.deals, action) {
	switch(action.type) {
		case types.LOAD_ATTRACTION_DEAL_SUCCESS:
			return action.attractionDeals;
		default:
			return state;
	}
}
