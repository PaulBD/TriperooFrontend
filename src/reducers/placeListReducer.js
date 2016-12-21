import initialState from './initialState';
import * as types from '../actionTypes/';

export default function placeReducer(state = initialState.places, action) {
	switch(action.type) {
		case types.LOAD_TOP_PLACE_SUCCESS:
			return action.places;
		default:
			return state;
	}
}
