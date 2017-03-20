import initialState from './initialState';
import * as types from '../actionTypes/';

export default function locationsReducer(state = [], action) {
	switch(action.type) {
		case types.LOAD_LOCATIONS_SUCCESS:
			return action.locations;
		default:
			return state;
	}
}
