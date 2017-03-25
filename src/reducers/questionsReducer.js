import initialState from './initialState';
import * as types from '../actionTypes/';

export default function questionsReducer(state = initialState.questions, action) {
	switch(action.type) {
		case types.LOAD_QUESTIONS_REQUEST:
            return Object.assign({}, state, { isFetching: true });
        case types.LOAD_QUESTIONS_SUCCESS:
            return Object.assign({}, state, { isFetching: false, errorMessage: '', questions: action.questions });
        case types.LOAD_QUESTIONS_FAILURE:
            return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

		case types.LOAD_GENERIC_QUESTIONS_SUCCESS:
			return action.questions;
		default:
			return state;
	}
}
