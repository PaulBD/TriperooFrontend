import initialState from './initialState';
import * as types from '../actionTypes/';

export default function placeDetailReducer(state = initialState.placeDetail, action) {
	switch(action.type) {
		case types.LOAD_PLACE_DETAIL_SUCCESS:
			return action.placeDetail;
		default:
			return state;
	}
}
