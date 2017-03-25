import * as types from '../actionTypes/';

export default function locationsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.CHILD_LOCATION_CONTENT_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.CHILD_LOCATION_CONTENT_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', locationsList: action.locationsList });
		case types.CHILD_LOCATION_CONTENT_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
			
		default:
			return state;
	}
}
