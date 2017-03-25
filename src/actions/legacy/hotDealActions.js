import DealApi from '../../api/legacy/mockDealApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../../actionTypes/';

export function loadDealSuccess(hotDeals) {
	return {type: types.LOAD_HOT_DEAL_SUCCESS, hotDeals};
}

export function loadHotDeals() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return DealApi.getDealList('hot').then(hotDeals => {
			dispatch(loadDealSuccess(hotDeals));
		}).catch(error => {
			throw(error);
		});
	};
}