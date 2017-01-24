import PlaceApi from '../api/mockPlaceApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadPlaceSuccess(place) {
	return {type: types.LOAD_PLACE_SUCCESS, place: place};
}

export function loadPlace(id, type) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return PlaceApi.getPlace(id, type).then(place => {
			dispatch(loadPlaceSuccess(place));
		}).catch(error => {
			throw(error);
		});
	};
}
