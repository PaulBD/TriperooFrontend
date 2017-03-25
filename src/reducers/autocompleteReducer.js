import * as types from '../actionTypes/';

export default function autocompleteReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.AUTOCOMPLETE_CLEAR:
			return Object.assign({}, state, { isFetching: false, autocompleteList: [] });
		case types.AUTOCOMPLETE_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.AUTOCOMPLETE_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', autocompleteList: action.autocompleteList });
		case types.AUTOCOMPLETE_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
			
		default:
			return state;
	}
}
