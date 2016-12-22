import QuestionsApi from '../api/mockQuestionApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadQuestionSuccess(questions) {
	return {type: types.LOAD_QUESTIONS_SUCCESS, questions};
}

export function loadQuestions(type, id, limit, offset) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return QuestionsApi.getQuestions(type, id, limit, offset).then(questions => {
			dispatch(loadQuestionSuccess(questions));
		}).catch(error => {
			throw(error);
		});
	};
}

export function loadGenericQuestionSuccess(questions) {
	return {type: types.LOAD_GENERIC_QUESTIONS_SUCCESS, questions};
}

export function loadGenericQuestions(type, id, limit, offset) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return QuestionsApi.getGenericQuestions(type, id, limit, offset).then(questions => {
			dispatch(loadGenericQuestionSuccess(questions));
		}).catch(error => {
			throw(error);
		});
	};
}