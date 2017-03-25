import HotelDealsApi from '../api/hotelDealsApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Hotel Deals Content
// ****************************************
export function hotelDealsRequest() {
	return {type: types.HOTEL_DEALS_REQUEST, isFetching: true, hotelDeals: []};
}

export function hotelDealsSuccess(hotelDeals) {
	return {type: types.HOTEL_DEALS_SUCCESS, hotelDeals};
}

export function hotelDealsFailure(errorMessage) {
	return {type: types.HOTEL_DEALS_FAILURE, isFetching:false, errorMessage};
}

export function loadHotelDealsByLocation(location, limit, offset) {
	return dispatch => {
		dispatch(hotelDealsRequest());
		return HotelDealsApi.getHotelDealsByLocation(location, limit, offset).then(hotelDeals => {
			dispatch(hotelDealsSuccess(hotelDeals));
		}).catch(error => {
			dispatch(hotelDealsFailure(error.response.data));
		});
	};
}