import initialState from './initialState';
import * as types from '../actionTypes/';

export default function locationReducer(state = {}, action) {
	switch(action.type) {
		case types.LOAD_LOCATION_SUCCESS:
			return action.location;
		default:
			return state;
	}
}
