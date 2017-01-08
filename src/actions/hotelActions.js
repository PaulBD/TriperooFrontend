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

export function searchHotelSuccess(hotels) {
	return {type: types.SEARCH_HOTEL_SUCCESS, hotels};
}

export function searchHotels(searchValue, startDate, endDate, rooms, guests) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return HotelApi.getHotelsBySearch(searchValue, startDate, endDate, rooms, guests).then(hotels => {
			dispatch(searchHotelSuccess(hotels));
		}).catch(error => {
			throw(error);
		});
	};
}