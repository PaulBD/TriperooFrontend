import AiportHotelApi from '../api/airportHotelApi';
import * as types from '../actionTypes/';

// ****************************************
// Aiport Hotel
// ****************************************
export function requestAirportHotelContent() {
	return { type: types.AIRPORT_HOTEL_REQUEST, isFetching: true };
}

export function aiportHotelSuccess(airportHotel) {
	return {type: types.AIRPORT_HOTEL_SUCCESS, isFetching: false, airportHotel};
}

export function aiportHotelFailure(message) {
	return {type: types.AIRPORT_HOTEL_FAILURE, isFetching: false,  message};
}

export function loadAiportHotels(airport, arrivalDate, departDate, flightDate, nights, roomType, secondRoomType, parkingDays, language) {
	return dispatch => {
		dispatch(requestAirportHotelContent());
		return AiportHotelApi.loadAiportHotels(airport, arrivalDate, departDate, flightDate, nights, roomType, secondRoomType, parkingDays, language).then(airportHotels => {
			dispatch(aiportHotelSuccess(airportHotels));
			if (airportHotels.apI_Reply.request != undefined)
			{
				localStorage.setItem('he_token', airportHotels.apI_Reply.request.token);
			}
		}).catch(error => {
			dispatch(aiportHotelFailure(error.response.data));
		});
	};
}
