import AirportApi from '../api/airportApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Destination from hard coded json
// ****************************************
export function airportRequest() {
	return {type: types.AIRPORT_REQUEST, isFetching: true};
}
export function airportSuccess(airportList) {
	return {type: types.AIRPORT_SUCCESS, isFetching: false, airportList};
}
export function airportFailure(message) {
	return {type: types.AIRPORT_FAILURE, isFetching: false, message};
}

export function loadAirports() {
	return dispatch => {
		dispatch(airportRequest());
		return AirportApi.getAirports().then(airportList => {
			dispatch(airportSuccess(airportList));
		}).catch(error => {
			dispatch(airportFailure(error));
		});
	};
}