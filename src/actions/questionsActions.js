import QuestionsApi from '../api/questionsApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadQuestionSuccess(questions) {
	return {type: types.LOAD_QUESTIONS_SUCCESS, questions};
}

export function loadQuestions(id, limit, offset) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return QuestionsApi.getQuestions(id, limit, offset).then(questions => {
			dispatch(loadQuestionSuccess(questions));
		}).catch(error => {
			throw(error);
		});
	};
}