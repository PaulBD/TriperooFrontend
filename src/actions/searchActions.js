import SearchApi from '../api/mockSearchApi';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadSearchesSuccess(searches) {
	return {type: 'LOAD_SEARCH_SUCCESS', searches};
}

export function clearSearches() {
	return {type: 'CLEAR_SEARCHES', searches: []};
}

export function loadSearches(value) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return SearchApi.getSearch(value).then(searches => {
			dispatch(loadSearchesSuccess(searches));
		}).catch(error => {
			throw(error);
		});
	};
}

