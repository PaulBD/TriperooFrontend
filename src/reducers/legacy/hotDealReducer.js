import initialState from './initialState';
import * as types from '../../actionTypes/';

export default function hotDealReducer(state = initialState.deals, action) {
	switch(action.type) {
		case types.LOAD_HOT_DEAL_SUCCESS:
			return action.hotDeals;
		default:
			return state;
	}
}
