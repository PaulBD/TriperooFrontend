import LocationQuestionsApi from '../../../api/location/questions/questionsApi';
import * as types from '../../../actionTypes/index';

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

export function loadQuestionsByLocationId(locationId, parentLocationId, pageSize, pageNumber) {
	return dispatch => {
		dispatch(receiveQuestions());
		return LocationQuestionsApi.getQuestionsByLocationId(locationId, parentLocationId, pageSize, pageNumber).then(questions => {
			dispatch(loadQuestionSuccess(questions));
		}).catch(error => {
			dispatch(loadQuestionsFailure(error.response.data));
		});
	};
}
