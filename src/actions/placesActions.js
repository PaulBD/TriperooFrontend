import PlaceListApi from '../api/mockPlaceListApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadTopPlacesSuccess(places) {
	return {type: types.LOAD_TOP_PLACE_SUCCESS, places: places};
}

export function loadTopPlaces(id, type) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return PlaceListApi.getTopPlaces(id, type).then(places => {
			dispatch(loadTopPlacesSuccess(places));
		}).catch(error => {
			throw(error);
		});
	};
}