import initialState from './initialState';
import * as types from '../actionTypes/';

export default function hotelsReducer(state = initialState.hotels, action) {
	switch(action.type) {
		case types.LOAD_HOTEL_SUCCESS:
			return action.hotels;
		case types.SEARCH_HOTEL_SUCCESS:
			return action.hotels;
		default:
			return state;
	}
}
