import initialState from './initialState';
import * as types from '../actionTypes/';

export default function commentReducer(state = initialState.comments, action) {
	switch(action.type) {
		case types.LOAD_COMMENTS_SUCCESS:
			return action.comments;
		default:
			return state;
	}
}
