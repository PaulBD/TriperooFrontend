import AiportParkingApi from '../../api/travelextras/airportParkingApi';
import * as types from '../../actionTypes/';

// ****************************************
// Aiport Parking
// ****************************************
export function requestAirportParkingContent() {
	return { type: types.AIRPORT_PARKING_REQUEST, isFetching: true };
}

export function airportParkingSuccess(airportParking) {
	return {type: types.AIRPORT_PARKING_SUCCESS, isFetching: false, airportParking};
}

export function airportParkingFailure(message) {
	return {type: types.AIRPORT_PARKING_FAILURE, isFetching: false,  message};
}

export function loadAirportParking(airportName, dropoffDate, dropoffTime, pickupDate, pickupTime, language) {
	return dispatch => {
		dispatch(requestAirportParkingContent());
		return AiportParkingApi.loadAirportParking(airportName, dropoffDate, dropoffTime, pickupDate, pickupTime, language).then(airportParking => {
			dispatch(airportParkingSuccess(airportParking));
			if (airportParking.apI_Reply.request != undefined)
			{
				localStorage.setItem('he_token', airportParking.apI_Reply.request.token);
			}
		}).catch(error => {
			dispatch(airportParkingFailure(error.response.data));
		});
	};
}
