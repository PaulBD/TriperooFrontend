import * as types from '../actionTypes/';

// ****************************************
// Save Currency
// ****************************************
export function saveCurrencySuccess(currency) {
	return {type: types.SAVE_CURRENCY_SUCCESS, currency};
}

export function saveCurrency(currency) {
	return dispatch => {
		localStorage.setItem('currency', currency);
		return dispatch(saveCurrencySuccess(currency));
	};
}

