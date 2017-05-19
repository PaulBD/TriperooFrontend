import * as types from '../../actionTypes/';

export default function nightlifeReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.NIGHTLIFE_CONTENT_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.NIGHTLIFE_CONTENT_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', nightlifeList: action.nightlifeList });
		case types.NIGHTLIFE_CONTENT_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

		default:
			return state;
	}
}
