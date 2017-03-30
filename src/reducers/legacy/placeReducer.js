import initialState from './initialState';
import * as types from '../../actionTypes/';

export default function placeReducer(state = initialState.place, action) {
	switch(action.type) {
		case types.LOAD_PLACE_SUCCESS:
			return action.place;
		default:
			return state;
	}
}
