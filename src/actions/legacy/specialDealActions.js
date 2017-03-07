import DealApi from '../../api/legacy/mockDealApi';
import {beginAjaxCall} from '../ajaxStatusActions';
import * as types from '../../actionTypes/';

export function loadDealSuccess(specialDeals) {
	return {type: types.LOAD_SPECIAL_DEAL_SUCCESS, specialDeals};
}

export function loadSpecialDeals() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return DealApi.getDealList('special').then(specialDeals => {
			dispatch(loadDealSuccess(specialDeals));
		}).catch(error => {
			throw(error);
		});
	};
}