import QuestionApi from '../api/questionApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';


export function receiveQuestion(question) {
	return {type: types.QUESTION_REQUEST, isSending: true, hasPosted: false, question};
}

export function questionSuccess() {
	return {type: types.POST_QUESTION_SUCCESS, isSending: false, hasPosted: true};
}

export function questionError(message) {
	return {type: types.POST_QUESTION_FAILURE, isSending: false, hasPosted: false, message};
}

export function postQuestion(question, state, event, node) {

	return dispatch => {
		dispatch(receiveQuestion(question));
		dispatch(beginAjaxCall());
		if ((question.question.length > 0) && (question.inventoryReference > 0))
    	{
			return QuestionApi.postQuestion(question).then(question => {
				dispatch(questionSuccess());
				state.setState({ wizardStep: 2, errors:'', question: '' });    

				if (event != null && node != null)
				{
					node.dispatchEvent(event); 
				}
			}).catch(error => {
				dispatch(questionError(error.response.data));
			});
		}
		else {
			dispatch(questionError("Please complete the question form"));
		}
	};
}