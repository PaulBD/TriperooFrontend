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

export function loadHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, room, city, pageSize, pageNumber) {
  return dispatch => {
    dispatch(hotelsByLocationRequest());
    return HotelApi.getHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, room, city, pageSize, pageNumber).then(hotels => {
      dispatch(hotelsByLocationSuccess(hotels));
    }).catch(error => {
      dispatch(hotelsByLocationFailure(error.response.data));
    });
  };
}


// ****************************************
// Load Hotel Content By Proximity
// ****************************************
export function hotelsByProximityRequest() {
  return {type: types.HOTELS_BY_PROXIMITY_REQUEST, isFetching: true, hotels: []};
}

export function hotelsByProximitySuccess(hotels) {
  return {type: types.HOTELS_BY_PROXIMITY_SUCCESS, hotels};
}

export function hotelsByProximityFailure(errorMessage) {
  return {type: types.HOTELS_BY_PROXIMITY_FAILURE, isFetching: false, errorMessage};
}

export function loadHotelsByProximty(locationId, latitude, longitude, radius, locale, currencyCode, pageSize, pageNumber) {
  return dispatch => {
    dispatch(hotelsByProximityRequest());
    return HotelApi.getHotelsByProximty(locationId, latitude, longitude, radius, locale, currencyCode, pageSize, pageNumber).then(hotels => {
      dispatch(hotelsByProximitySuccess(hotels));
    }).catch(error => {
      dispatch(hotelsByProximityFailure(error.response.data));
    });
  };
}


// ****************************************
// Load Hotel Content By Id
// ****************************************
export function hotelByIdRequest() {
  return {type: types.HOTELS_BY_ID_REQUEST, isFetching: true, hotel: {}};
}

export function hotelByIdSuccess(hotel) {
  return {type: types.HOTELS_BY_ID_SUCCESS, hotel};
}

export function hotelByIdFailure(errorMessage) {
  return {type: types.HOTELS_BY_ID_FAILURE, isFetching: false, errorMessage};
}

export function loadHotelById(locationId, hotelId, locale, currencyCode) {
  return dispatch => {
    dispatch(hotelByIdRequest());
    return HotelApi.getHotelById(locationId, hotelId, locale, currencyCode).then(hotel => {
      dispatch(hotelByIdSuccess(hotel));
    }).catch(error => {
      dispatch(hotelByIdFailure(error.response.data));
    });
  };
}


// ****************************************
// Load Hotel Room Content By Id
// ****************************************
export function hotelRoomsByIdRequest() {
  return {type: types.HOTEL_ROOMS_BY_ID_REQUEST, isFetching: true, hotelRooms: {}};
}

export function hotelRoomsByIdSuccess(hotelRooms) {
  return {type: types.HOTEL_ROOMS_BY_ID_SUCCESS, hotelRooms};
}

export function hotelRoomsByIdFailure(errorMessage) {
  return {type: types.HOTEL_ROOMS_BY_ID_FAILURE, isFetching: false, errorMessage};
}

export function loadHotelRoomsById(locationId, hotelId, arrivalDate, nights, locale, currencyCode) {
  return dispatch => {
    dispatch(hotelRoomsByIdRequest());
    return HotelApi.getHotelRoomsById(locationId, hotelId, arrivalDate, nights, locale, currencyCode).then(hotelRooms => {
      dispatch(hotelRoomsByIdSuccess(hotelRooms));
    }).catch(error => {
      dispatch(hotelRoomsByIdFailure(error.response.data));
    });
  };
}


