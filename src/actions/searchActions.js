import SearchApi from '../api/searchApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadSearchesSuccess(searches) {
	return {type: types.LOAD_SEARCH_SUCCESS, searches};
}

export function clearSearches() {
	return {type: types.CLEAR_SEARCHES, searches: []};
}

export function searchError(error) {
	return {type: types.SEARCH_ERROR, searches: [], error: error};
}

export function loadSearches(value, searchType) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return SearchApi.getSearch(value, searchType).then(searches => {
			console.log(searches);
			dispatch(loadSearchesSuccess(searches));
		}).catch(error => {
			console.log(error);
				dispatch(searchError(error));
		});
	};
}

