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
	return {type: types.SEARCH_ERROR, searches: [], error};
}

export function loadSearches(value, searchType) {
	return dispatch => {

		if (value.length > 0)
		{
			dispatch(beginAjaxCall());
			return SearchApi.getSearch(value, searchType).then(searches => {
				dispatch(loadSearchesSuccess(searches));
			}).catch(error => {
				dispatch(searchError(error));
			});
		}
		else {
			dispatch(searchError('No search value specified')); 
		}
	};
}

