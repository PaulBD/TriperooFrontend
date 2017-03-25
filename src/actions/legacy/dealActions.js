import DealApi from '../../api/legacy/mockDealApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../../actionTypes/';

export function loadAttractionDealSuccess(attractionDeals) {
	return {type: types.LOAD_ATTRACTION_DEAL_SUCCESS, attractionDeals};
}

export function loadAttractionDeals(id, placeType) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return DealApi.getDealListByPlace(id, placeType, 'attraction').then(attractionDeals => {
			dispatch(loadAttractionDealSuccess(attractionDeals));
		}).catch(error => {
			throw(error);
		});
	};
}

export function loadHotelDealSuccess(hotelDeals) {
	return {type: types.LOAD_HOTEL_DEAL_SUCCESS, hotelDeals};
}

export function loadHotelDeals(id, placeType) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return DealApi.getDealListByPlace(id, placeType, 'hotel').then(hotelDeals => {
			dispatch(loadHotelDealSuccess(hotelDeals));
		}).catch(error => {
			throw(error);
		});
	};
}

export function loadRestaurantDealSuccess(restaurantDeals) {
	return {type: types.LOAD_RESTAURANT_DEAL_SUCCESS, restaurantDeals};
}

export function loadRestaurantDeals(id, placeType) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return DealApi.getDealListByPlace(id, placeType, 'restaurant').then(restaurantDeals => {
			dispatch(loadRestaurantDealSuccess(restaurantDeals));
		}).catch(error => {
			throw(error);
		});
	};
}