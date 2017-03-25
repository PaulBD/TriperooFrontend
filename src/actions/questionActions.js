import QuestionApi from '../api/questionApi';
import * as types from '../actionTypes/';

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

export function postQuestion(question, state, event, node) {

	return dispatch => {
		dispatch(postQuestionInitialize(question));
		if ((question.question.length > 0) && (question.inventoryReference > 0))
    	{
			return QuestionApi.postQuestion(question).then(question => {
				dispatch(postQuestionSuccess());
				state.setState({ wizardStep: 1, errors:'', question: '' });    

				if (event != null && node != null)
				{
					node.dispatchEvent(event); 
				}
			}).catch(error => {
				dispatch(postQuestionFailure(error.response.data));
			});
		}
		else {
			dispatch(postQuestionFailure("Please complete the question form"));
		}
	};
}