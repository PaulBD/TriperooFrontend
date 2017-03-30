import initialState from './initialState';
import * as types from '../../actionTypes/';

export default function placeReducer(state = initialState.places, action) {
	switch(action.type) {
		case types.LOAD_TOP_PLACE_SUCCESS:
			return action.places;
		case types.LOAD_PLACES_SUCCESS:
			return action.places;
		case types.SEARCH_HOTEL_SUCCESS:
			return action.places;
		default:
			return state;
	}
}
