import QuestionsApi from '../api/questionsApi';
import * as types from '../actionTypes/';

// ****************************************
// List Questions By location id
// ****************************************
export function receiveQuestions() {
	return {type: types.LOAD_QUESTIONS_REQUEST, isFetching: true};
}

export function loadQuestionSuccess(questions) {
	return {type: types.LOAD_QUESTIONS_SUCCESS, isFetching: false, questions};
}

export function loadQuestionsFailure(message) {
	return {type: types.LOAD_QUESTIONS_FAILURE, isFetching: false, message};
}

export function loadQuestionsByLocationId(locationId, limit, offset) {
	return dispatch => {
		dispatch(receiveQuestions());
		return QuestionsApi.getQuestionsByLocationId(locationId, limit, offset).then(questions => {
			dispatch(loadQuestionSuccess(questions));
		}).catch(error => {
			dispatch(loadQuestionsFailure(error.response.data));
		});
	};
}