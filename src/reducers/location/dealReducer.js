import * as types from '../../actionTypes/';

export default function dealsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.DEALS_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.DEALS_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', deals: action.deals });
		case types.DEALS_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    default:
			return state;
	}
}
