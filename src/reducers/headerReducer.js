import * as types from '../actionTypes/';

export default function headerReducer(state = '', action) {
	switch(action.type) {
		case types.LOAD_HEADER_SUCCESS:
			return action.header;
		default:
			return state;
	}
}
