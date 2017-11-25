import * as types from '../../actionTypes/';

export default function hotelsReducer(state = { isFetching: false }, action) {
	switch(action.type) {

    case types.HOTELS_BY_LOCATION_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.HOTELS_BY_LOCATION_SUCCESS:
      return Object.assign({}, state, { isFetching: false, errorMessage: '', hotels: action.hotels });
    case types.HOTELS_BY_LOCATION_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    case types.HOTELS_BY_PROXIMITY_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.HOTELS_BY_PROXIMITY_SUCCESS:
      return Object.assign({}, state, { isFetching: false, errorMessage: '', hotels: action.hotels });
    case types.HOTELS_BY_PROXIMITY_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    case types.HOTELS_BY_ID_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.HOTELS_BY_ID_SUCCESS:
      return Object.assign({}, state, { isFetching: false, errorMessage: '', hotel: action.hotel });
    case types.HOTELS_BY_ID_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    case types.HOTEL_ROOMS_BY_ID_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.HOTEL_ROOMS_BY_ID_SUCCESS:
      return Object.assign({}, state, { isFetching: false, errorMessage: '', hotelRooms: action.hotelRooms });
    case types.HOTEL_ROOMS_BY_ID_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    default:
			return state;
	}
}
