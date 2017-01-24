import initialState from './initialState';
import * as types from '../actionTypes/';

export default function areaReducer(state = initialState.area, action) {
	switch(action.type) {
		case types.LOAD_AREA_SUCCESS:
			return action.area;
		default:
			return state;
	}
}
