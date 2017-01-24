import PlaceDetailApi from '../api/mockPlaceDetailApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadPlaceDetailSuccess(placeDetail) {
	return {type: types.LOAD_PLACE_DETAIL_SUCCESS, placeDetail: placeDetail};
}

export function loadPlace(id, type) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return PlaceDetailApi.getPlace(id, type).then(placeDetail => {
			dispatch(loadPlaceDetailSuccess(placeDetail));
		}).catch(error => {
			throw(error);
		});
	};
}
