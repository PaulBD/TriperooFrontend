import CommentApi from '../api/mockCommentApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadCommentSuccess(comments) {
	return {type: types.LOAD_COMMENTS_SUCCESS, comments};
}

export function loadComments(type, id, limit, offset) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return CommentApi.getComments(type, id, limit, offset).then(comments => {
			dispatch(loadCommentSuccess(comments));
		}).catch(error => {
			throw(error);
		});
	};
}