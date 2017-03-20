import initialState from './initialState';
import * as types from '../actionTypes/';

export default function questionsReducer(state = initialState.questions, action) {
	switch(action.type) {
		case types.LOAD_QUESTIONS_SUCCESS:
			return action.questions;
		case types.LOAD_GENERIC_QUESTIONS_SUCCESS:
			return action.questions;
		default:
			return state;
	}
}
