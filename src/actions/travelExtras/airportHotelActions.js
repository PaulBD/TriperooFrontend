import AiportHotelApi from '../../api/travelExtras/airportHotelApi';
import * as types from '../../actionTypes/';

// ****************************************
// Aiport Hotel
// ****************************************
export function requestAirportHotelContent() {
	return { type: types.AIRPORT_HOTEL_REQUEST, isFetching: true };
}

export function airportHotelSuccess(airportHotel) {
	return {type: types.AIRPORT_HOTEL_SUCCESS, isFetching: false, airportHotel};
}

export function airportHotelFailure(message) {
	return {type: types.AIRPORT_HOTEL_FAILURE, isFetching: false,  message};
}

export function loadAirportHotels(airportName, arrivalDate, departDate, dropOffCarDate, collectCarDate, nights, roomType, secondRoomType, parkingDays, language) {
	return dispatch => {
		dispatch(requestAirportHotelContent());
		return AiportHotelApi.loadAirportHotels(airportName, arrivalDate, departDate, dropOffCarDate, collectCarDate, nights, roomType, secondRoomType, parkingDays, language).then(airportHotels => {
			dispatch(airportHotelSuccess(airportHotels));
			if (airportHotels.apI_Reply.request != undefined)
			{
				localStorage.setItem('he_token', airportHotels.apI_Reply.request.token);
			}
		}).catch(error => {
			dispatch(airportHotelFailure(error.response.data));
		});
	};
}
