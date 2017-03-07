import initialState from './initialState';
import * as types from '../actionTypes/';

export default function topDestinationsReducer(state = [], action) {
	switch(action.type) {
		case types.LOAD_TOP_DESTINATIONS_SUCCESS:
			return action.destinations;
		default:
			return state;
	}
}
