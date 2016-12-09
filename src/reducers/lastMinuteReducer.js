import initialState from './initialState';
import * as types from '../actionTypes/';

export default function lastMinuteReducer(state = initialState.lastMinute, action) {
	switch(action.type) {
		case types.LOAD_LAST_MINUTE_FEATURE_SUCCESS:
			return action.features;
		default:
			return state;
	}
}
