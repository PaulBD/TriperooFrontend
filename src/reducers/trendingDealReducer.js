import initialState from './initialState';
import * as types from '../actionTypes/';

export default function trendingDealReducer(state = initialState.trendingDeals, action) {
	switch(action.type) {
		case types.LOAD_TRENDING_DEAL_SUCCESS:
			return action.trendingDeals;
		default:
			return state;
	}
}
