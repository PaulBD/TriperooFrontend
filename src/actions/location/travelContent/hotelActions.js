import HotelApi from '../../../api/location/travelContent/hotelApi';
import * as types from '../../../actionTypes/';

// ****************************************
// Load Hotel Deals Content
// ****************************************
export function hotelDealsRequest() {
	return {type: types.DEALS_REQUEST, isFetching: true, hotelDeals: []};
}

export function hotelDealsSuccess(hotelDeals) {
	return {type: types.DEALS_SUCCESS, hotelDeals};
}

export function hotelDealsFailure(errorMessage) {
	return {type: types.DEALS_FAILURE, isFetching: false, errorMessage};
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

export function loadHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude) {
  return dispatch => {
    dispatch(hotelsByLocationRequest());
    return HotelApi.getHotelsByLocation(locationId, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude).then(hotels => {
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


export function loadHotelsByProximty(locationId, latitude, longitude, radius, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude, checkDates) {
  return dispatch => {
    dispatch(hotelsByProximityRequest());
    return HotelApi.getHotelsByProximty(locationId, latitude, longitude, radius, arrivalDate, nights, locale, currencyCode, rooms1, rooms2, rooms3, location, filters, sortBy, pageSize, pageNumber, exclude, checkDates).then(hotels => {
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

export function loadHotelRoomsById(locationId, hotelId, arrivalDate, nights, rooms, guests, locale, currencyCode) {
  return dispatch => {
    dispatch(hotelRoomsByIdRequest());
    return HotelApi.getHotelRoomsById(locationId, hotelId, arrivalDate, nights, rooms, guests, locale, currencyCode).then(hotelRooms => {
      dispatch(hotelRoomsByIdSuccess(hotelRooms));
    }).catch(error => {
      dispatch(hotelRoomsByIdFailure(error.response.data));
    });
  };
}

// ****************************************
// Load Hotel Room By Room Code
// ****************************************
export function hotelRoomByIdRequest() {
  return {type: types.HOTEL_ROOM_BY_ID_REQUEST, isFetching: true, hotelRooms: {}};
}

export function hotelRoomByIdSuccess(hotelRoom) {
  return {type: types.HOTEL_ROOM_BY_ID_SUCCESS, hotelRoom};
}

export function hotelRoomByIdFailure(errorMessage) {
  return {type: types.HOTEL_ROOM_BY_ID_FAILURE, isFetching: false, errorMessage};
}

export function loadHotelRoomByRoomCode(locationId, hotelId, arrivalDate, nights, rooms, guests, locale, currencyCode, roomTypeCode, rateCode) {
  return dispatch => {
    dispatch(hotelRoomByIdRequest());
    return HotelApi.getHotelRoomByRoomCode(locationId, hotelId, arrivalDate, nights, rooms, guests, locale, currencyCode, roomTypeCode, rateCode).then(hotelRooms => {
      dispatch(hotelRoomByIdSuccess(hotelRooms));
    }).catch(error => {
      dispatch(hotelRoomByIdFailure(error.response.data));
    });
  };
}



// ****************************************
// Book Hotel Room
// ****************************************
export function bookHotelRequest() {
  return {type: types.BOOK_HOTEL_REQUEST, isFetching: true, hotelRoom: {}};
}

export function bookHotelSuccess(reservation) {
  return {type: types.BOOK_HOTEL_SUCCESS, reservation};
}

export function bookHotelFailure(errorMessage) {
  return {type: types.BOOK_HOTEL_FAILURE, isFetching: false, errorMessage};
}

export function bookHotelRoom(locationId, hotelId, arrivalDate, nights, supplierType, rateKey, roomTypeCode, rateCode, chargeableRate, numberOfAdults1, firstNameRoom1, lastNameRoom1, bedTypeIdRoom1, numberOfAdults2, firstNameRoom2, lastNameRoom2, bedTypeIdRoom2, numberOfAdults3, firstNameRoom3, lastNameRoom3, bedTypeIdRoom3, emailAddress, firstName, lastName, homePhone, workPhone, creditCardType, creditCardNumber, creditCardIdentifier, creditCardExpiryMonth, creditCardExpiryYear, address1, city, stateProvince, countryCode, postalCode, specialInstructions) {
  return dispatch => {
    dispatch(bookHotelRequest());
    return HotelApi.bookHotel(locationId, hotelId, arrivalDate, nights, supplierType, rateKey, roomTypeCode, rateCode, chargeableRate, numberOfAdults1, firstNameRoom1, lastNameRoom1, bedTypeIdRoom1, numberOfAdults2, firstNameRoom2, lastNameRoom2, bedTypeIdRoom2, numberOfAdults3, firstNameRoom3, lastNameRoom3, bedTypeIdRoom3, emailAddress, firstName, lastName, homePhone, workPhone, creditCardType, creditCardNumber, creditCardIdentifier, creditCardExpiryMonth, creditCardExpiryYear, address1, city, stateProvince, countryCode, postalCode, specialInstructions).then(reservation => {
      dispatch(bookHotelSuccess(reservation));
    }).catch(error => {
      dispatch(bookHotelFailure(error.response.data));
    });
  };
}



