import HotelApi from '../../../api/location/travelContent/hotelApi';
import * as types from '../../../actionTypes/';

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
	return {type: types.HOTEL_DEALS_FAILURE, isFetching: false, errorMessage};
}

export function loadHotelDealsByLocation(locationId, pageSize, pageNumber) {
	return dispatch => {
		dispatch(hotelDealsRequest());
		return HotelApi.getHotelDealsByLocation(locationId, pageSize, pageNumber).then(hotelDeals => {
			dispatch(hotelDealsSuccess(hotelDeals));
		}).catch(error => {
			dispatch(hotelDealsFailure(error.response.data));
		});
	};
}
