import LocationApi from '../api/mockLocationApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadLocationSuccess(area) {
	return {type: types.LOAD_AREA_SUCCESS, area: area};
}

export function loadLocation(id, type) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return LocationApi.getLocation(id, type).then(area => {
			dispatch(loadLocationSuccess(area));
		}).catch(error => {
			throw(error);
		});
	};
}
