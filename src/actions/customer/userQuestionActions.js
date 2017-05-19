import QuestionApi from '../../api/customer/questionApi';
import * as types from '../../actionTypes/';

// ****************************************
// Post new question
// ****************************************
export function postQuestionInitialize(question) {
	return {type: types.POST_QUESTION_REQUEST, isSending: true, hasPosted: false, question};
}

export function postQuestionSuccess() {
	return {type: types.POST_QUESTION_SUCCESS, isSending: false, hasPosted: true};
}

export function postQuestionFailure(message) {
	return {type: types.POST_QUESTION_FAILURE, isSending: false, hasPosted: false, message};
}

export function postQuestion(question) {

	return dispatch => {
		dispatch(postQuestionInitialize(question));
		if ((question.question.length > 0) && (question.inventoryReference > 0))
		{
			return QuestionApi.postQuestion(question).then(question => {
				dispatch(postQuestionSuccess()); 
			}).catch(error => {
				dispatch(postQuestionFailure(error.response.data));
			});
		}
		else {
			dispatch(postQuestionFailure("Please complete the question form"));
		}
	};
}

// ****************************************
// Post new answer
// ****************************************
export function postAnswerInitialize(answer) {
	return {type: types.POST_ANSWER_REQUEST, isSending: true, hasPosted: false, answer};
}

export function postAnswerSuccess() {
	return {type: types.POST_ANSWER_SUCCESS, isSending: false, hasPosted: true};
}

export function postAnswerFailure(message) {
	return {type: types.POST_ANSWER_FAILURE, isSending: false, hasPosted: false, message};
}

export function postAnswer(answer) {

	return dispatch => {
		dispatch(postAnswerInitialize(answer));
		if (answer.questionId > 0)
		{
			return QuestionApi.postAnswer(answer).then(answer => {
				dispatch(postAnswerSuccess());
			}).catch(error => {
				dispatch(postAnswerFailure(error.response.data));
			});
		}
		else {
			dispatch(postQuestionFailure("Please complete the answer form"));
		}
	};
}