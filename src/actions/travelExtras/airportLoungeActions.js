import AirportLoungeApi from '../../api/travelExtras/airportLoungeApi';
import * as types from '../../actionTypes/';

// ****************************************
// Aiport Parking
// ****************************************
export function requestAirportLoungeContent() {
	return { type: types.AIRPORT_LOUNGE_REQUEST, isFetching: true, isError: false };
}

export function airportLoungeSuccess(airportLounge) {

	if (airportLounge.apI_Reply.error.message != undefined)
	{
		return {type: types.AIRPORT_LOUNGE_SUCCESS, isFetching: false, airportLounge, isError: true, error: airportLounge.apI_Reply.error.message};
	}
	else {
		return {type: types.AIRPORT_LOUNGE_SUCCESS, isFetching: false, airportLounge, isError: false};
	}
}

export function airportLoungeFailure(message) {
	return {type: types.AIRPORT_LOUNGE_FAILURE, isFetching: false,  message, isError: false };
}

export function loadAirportLounges(airportName, arrivalDate, arrivalTime, flightTime, adultCount, childCount, infantCount, language) {
	return dispatch => {
		dispatch(requestAirportLoungeContent());
		return AirportLoungeApi.loadAirportLounges(airportName, arrivalDate, arrivalTime, flightTime, adultCount, childCount, infantCount, language).then(airportLounge => {
			dispatch(airportLoungeSuccess(airportLounge));
			if (airportLounge.apI_Reply.request != undefined)
			{
				localStorage.setItem('he_token', airportLounge.apI_Reply.request.token);
			}
		}).catch(error => {
			dispatch(airportLoungeFailure(error.response.data));
		});
	};
}
