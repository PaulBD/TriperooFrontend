import initialState from './initialState';
import * as types from '../actionTypes/';

export default function currencyReducer(state = initialState.currency, action) {
	switch(action.type) {
		case types.SAVE_CURRENCY_SUCCESS:
			return action.currency;
		default:
			return state;
	}
}
