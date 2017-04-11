import AiportParkingApi from '../api/airportParkingApi';
import * as types from '../actionTypes/';

// ****************************************
// Aiport Parking
// ****************************************
export function requestAirportParkingContent() {
	return { type: types.AIRPORT_PARKING_REQUEST, isFetching: true };
}

export function aiportParkingSuccess(airportParking) {
	return {type: types.AIRPORT_PARKING_SUCCESS, isFetching: false, airportParking};
}

export function aiportParkingFailure(message) {
	return {type: types.AIRPORT_PARKING_FAILURE, isFetching: false,  message};
}

export function loadAiportParking(airport, dropoffDate, dropoffTime, pickupDate, pickupTime, language) {
	return dispatch => {
		dispatch(requestAirportParkingContent());
		return AiportParkingApi.loadAiportParking(airport, dropoffDate, dropoffTime, pickupDate, pickupTime, language).then(airportParking => {
			dispatch(aiportParkingSuccess(airportParking));
			if (airportParking.apI_Reply.request != undefined)
			{
				localStorage.setItem('he_token', airportParking.apI_Reply.request.token);
			}
		}).catch(error => {
			console.log(error);
			dispatch(aiportParkingFailure(error.response.data));
		});
	};
}
