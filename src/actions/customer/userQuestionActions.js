import QuestionApi from '../../api/customer/questionApi';
import * as types from '../../actionTypes/';

// ****************************************
// Post new question
// ****************************************
export function postQuestionInitialize(isSending, question) {
	return {type: types.POST_QUESTION_REQUEST, isSending: isSending, hasPosted: false, question};
}

export function postQuestionSuccess(question) {
  return {type: types.POST_QUESTION_SUCCESS, isSending: false, hasPosted: true, question};
}

export function postQuestionFailure(message) {
	return {type: types.POST_QUESTION_FAILURE, isSending: false, hasPosted: false, message};
}

export function resetQuestion() {
  return dispatch => {
    dispatch(postQuestionInitialize(false, null));
  };
}

export function postQuestion(question) {

	return dispatch => {
		dispatch(postQuestionInitialize(true, question));
		if ((question.question.length > 0) && (question.inventoryReference > 0))
		{
			return QuestionApi.postQuestion(question).then(question => {
				dispatch(postQuestionSuccess(question));
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
export function postAnswerInitialize(isSending, answer) {
	return {type: types.POST_ANSWER_REQUEST, isSending: isSending, hasPostedAnswer: false, answer};
}

export function postAnswerSuccess() {
	return {type: types.POST_ANSWER_SUCCESS, isSending: false, hasPostedAnswer: true};
}

export function postAnswerFailure(message) {
	return {type: types.POST_ANSWER_FAILURE, isSending: false, hasPostedAnswer: false, message};
}

export function resetAnswer() {
  return dispatch => {
    dispatch(postAnswerInitialize(false, null));
  };
}

export function postAnswer(answer) {
	return dispatch => {
		dispatch(postAnswerInitialize(true, answer));
		if (answer.questionId != '')
		{
			return QuestionApi.postAnswer(answer).then(questions => {
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
