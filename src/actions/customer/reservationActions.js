import ReservationApi from '../../api/customer/reservationApi';
import * as types from '../../actionTypes/index';

// ****************************************
// Load Hotel Itinery
// ****************************************
export function requestHotelItinery() {
  return {type: types.HOTEL_ITINERY_REQUEST, isFetching: true };
}

export function hotelItinerySuccess(reservations) {
  return {type: types.HOTEL_ITINERY_SUCCESS, isFetching: false, reservations};
}

export function hotelItineryError(errorMessage) {
  return {type: types.HOTEL_ITINERY_FAILURE, isFetching: false,  errorMessage};
}

export function getHotelItinery() {
  return dispatch => {
    dispatch(requestHotelItinery());
    return ReservationApi.getHotelItinery().then(hotelItinery => {
      dispatch(hotelItinerySuccess(hotelItinery));
    }).catch(error => {
      dispatch(hotelItineryError(error.response.data));
    });
  };
}

// ****************************************
// Cancel Hotel Itinery
// ****************************************
export function requestCancelHotelItinery() {
  return {type: types.CANCEL_HOTEL_ITINERY_REQUEST, isFetching: true };
}

export function cancelHotelItinerySuccess(cancelReservation) {
  return {type: types.CANCEL_HOTEL_ITINERY_SUCCESS, isFetching: false, cancelReservation};
}

export function cancelHotelItineryError(errorMessage) {
  return {type: types.CANCEL_HOTEL_ITINERY_FAILURE, isFetching: false,  errorMessage};
}

export function cancelHotelItinery(itineryId, confirmationNumber, reason) {
  return dispatch => {
    dispatch(requestCancelHotelItinery());
    return ReservationApi.cancelHotelItinery(itineryId, confirmationNumber, reason).then(hotelItinery => {
      dispatch(cancelHotelItinerySuccess(hotelItinery));
    }).catch(error => {
      dispatch(cancelHotelItineryError(error.response.data));
    });
  };
}
