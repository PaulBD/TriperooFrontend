import DealApi from '../../api/legacy/mockDealApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../../actionTypes/';

export function loadDealSuccess(trendingDeals) {
	return {type: types.LOAD_TRENDING_DEAL_SUCCESS, trendingDeals};
}

export function loadTrendingDeals() {
	return dispatch => {
		dispatch(beginAjaxCall());
		return DealApi.getDealList('trending').then(trendingDeals => {
			dispatch(loadDealSuccess(trendingDeals));
		}).catch(error => {
			throw(error);
		});
	};
}