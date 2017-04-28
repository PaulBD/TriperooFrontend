import * as types from '../actionTypes/';

export default function eventsReducer(state = { isFetching: false }, action) {
	switch(action.type) {

		case types.EVENT_CONTENT_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.EVENT_CONTENT_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', locationEvents: action.locationEvents });
		case types.EVENT_CONTENT_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
		
		case types.EVENTS_BY_CATEGORY_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.EVENTS_BY_CATEGORY_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', locationEvents: action.locationEvents });
		case types.EVENTS_BY_CATEGORY_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
			
		default:
			return state;
	}
}
