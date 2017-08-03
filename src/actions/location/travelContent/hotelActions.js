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


// ****************************************
// Load Hotel Content By Location
// ****************************************
export function hotelsByLocationRequest() {
  return {type: types.HOTELS_BY_LOCATION_REQUEST, isFetching: true, hotels: []};
}

export function hotelsByLocationSuccess(hotels) {
  return {type: types.HOTELS_BY_LOCATION_SUCCESS, hotels};
}

export function hotelsByLocationFailure(errorMessage) {
  return {type: types.HOTELS_BY_LOCATION_FAILURE, isFetching: false, errorMessage};
}

export function loadHotelsByLocation(locationId, pageSize, pageNumber) {
  return dispatch => {
    dispatch(hotelsByLocationRequest());
    return HotelApi.getHotelsByLocation(locationId, pageSize, pageNumber).then(hotels => {
      dispatch(hotelsByLocationSuccess(hotels));
    }).catch(error => {
      dispatch(hotelsByLocationFailure(error.response.data));
    });
  };
}
