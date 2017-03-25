import AutocompleteApi from '../api/AutocompleteApi';
import * as types from '../actionTypes/';

// ****************************************
// Autocomplete
// ****************************************

export function autocompleteRequest() {
	return {type: types.AUTOCOMPLETE_REQUEST, };
}
export function autocompleteSuccess(autocompleteList) {
	return {type: types.AUTOCOMPLETE_SUCCESS, autocompleteList};
}

export function autocompleteFailure(message) {
	return {type: types.AUTOCOMPLETE_FAILURE, autocompleteList: [], message};
}

export function clearAutocomplete() {
	return {type: types.AUTOCOMPLETE_CLEAR, autocompleteList: []};
}

export function searchLocations(value, searchType) {
	return dispatch => {
		dispatch(autocompleteRequest());
		if (value.length > 0)
		{
			return AutocompleteApi.searchLocations(value, searchType).then(autocompleteList => {
				dispatch(autocompleteSuccess(autocompleteList));
			}).catch(error => {
				dispatch(autocompleteFailure(error));
			});
		}
		else {
			dispatch(autocompleteFailure('No search value specified')); 
		}
	};
}

