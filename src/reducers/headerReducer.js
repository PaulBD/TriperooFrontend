import * as types from '../actionTypes/';

export default function headerReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.HEADER_CONTENT_REQUEST:
			return Object.assign({}, state, { isFetching: true });
	    case types.HEADER_CONTENT_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', header: action.header });
	    case types.HEADER_CONTENT_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
	        
		default:
			return state;
	}
}
