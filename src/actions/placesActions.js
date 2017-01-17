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


export function loadPlacesSuccess(places) {
	return {type: types.LOAD_PLACES_SUCCESS, places};
}

export function loadPlaces(id, locationName, locationType, category, sortBy, currency) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return PlaceListApi.getPlacesByLocation(id, locationName, locationType, category).then(places => {
			dispatch(loadPlacesSuccess(places));
		}).catch(error => {
			throw(error);
		});
	};
}

export function searchHotelsSuccess(places) {
	return {type: types.SEARCH_HOTELS_SUCCESS, places};
}

export function searchHotels(searchValue, startDate, endDate, rooms, guests, sortBy, currency) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return PlaceListApi.getHotelsBySearch(searchValue, startDate, endDate, rooms, guests).then(places => {
			dispatch(searchHotelsSuccess(places));
		}).catch(error => {
			throw(error);
		});
	};
}