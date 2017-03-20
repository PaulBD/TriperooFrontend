import initialState from './initialState';
import * as types from '../actionTypes/';

export default function weatherReducer(state = {}, action) {
	switch(action.type) {
		case types.LOAD_CURRENT_WEATHER_SUCCESS:
			return action.weather;
		default:
			return state;
	}
}
