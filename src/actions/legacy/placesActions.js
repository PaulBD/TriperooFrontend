import PlaceListApi from '../../api/legacy/mockPlaceListApi';
import * as types from '../../actionTypes/';

export function loadTopPlacesSuccess(places) {
	return {type: types.LOAD_TOP_PLACE_SUCCESS, places: places};
}

export function loadTopPlaces(id, type) {
	return dispatch => {
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
		return PlaceListApi.getPlacesByLocation(id, locationName, locationType, category).then(places => {
			dispatch(loadPlacesSuccess(places));
		}).catch(error => {
			throw(error);
		});
	};
}

export function searchHotelsSuccess(places) {
	return {type: types.SEARCH_HOTEL_SUCCESS, places};
}

export function searchHotels(searchValue, startDate, endDate, rooms, guests, sortBy, currency) {
	return dispatch => {
		return PlaceListApi.getHotelsBySearch(searchValue, startDate, endDate, rooms, guests).then(places => {
			dispatch(searchHotelsSuccess(places));
		}).catch(error => {
			throw(error);
		});
	};
}