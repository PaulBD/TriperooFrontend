import initialState from './initialState';
import * as types from '../actionTypes/';

export default function destinationsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.DESTINATIONS_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.DESTINATIONS_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', destinationList: action.destinations });
		case types.DESTINATIONS_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
			
		default:
			return state;
	}
}
