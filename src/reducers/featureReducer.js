import initialState from './initialState';
import * as types from '../actionTypes/';

export default function featureReducer(state = initialState.features, action) {
	switch(action.type) {
		case types.LOAD_FEATURE_SUCCESS:
			return action.features;
		default:
			return state;
	}
}
