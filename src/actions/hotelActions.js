import HotelApi from '../api/mockHotelApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';


export function loadHotelSuccess(hotels) {
	return {type: types.LOAD_HOTEL_SUCCESS, hotels};
}

export function loadHotels(id, placeType) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return HotelApi.getHotelsByLocation(id, placeType).then(hotels => {
			dispatch(loadHotelSuccess(hotels));
		}).catch(error => {
			throw(error);
		});
	};
}
