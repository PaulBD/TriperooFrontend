import AreaApi from '../api/mockAreaApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadAreaSuccess(area) {
	return {type: types.LOAD_AREA_SUCCESS, area: area};
}

export function loadArea(id, type) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return AreaApi.getArea(id, type).then(area => {
			dispatch(loadAreaSuccess(area));
		}).catch(error => {
			throw(error);
		});
	};
}
