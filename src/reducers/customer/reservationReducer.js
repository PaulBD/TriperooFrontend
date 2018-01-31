import * as types from '../../actionTypes/';

export default function reservationReducer(state = { isSending: false, hasPosted: false }, action) {
  switch(action.type) {
    case types.HOTEL_ITINERY_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false });
    case types.HOTEL_ITINERY_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', reservations: action.reservations });
    case types.HOTEL_ITINERY_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.CANCEL_HOTEL_ITINERY_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false });
    case types.CANCEL_HOTEL_ITINERY_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', cancelReservation: action.cancelReservation });
    case types.CANCEL_HOTEL_ITINERY_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    default:
      return state;
  }
}
