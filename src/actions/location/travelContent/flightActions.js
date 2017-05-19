import FlightApi from '../../../api/location/travelContent/flightApi';
import * as types from '../../../actionTypes/';

// ****************************************
// Load Cached Flights (Skyscanner)
// ****************************************
export function searchFlightRequest() {
	return {type: types.SEARCH_FLIGHTS_REQUEST, isFetching: true, flights: []};
}

export function searchFlightSuccess(flights) {
	return {type: types.SEARCH_FLIGHTS_SUCCESS, flights};
}

export function searchFlightFailure(errorMessage) {
	return {type: types.SEARCH_FLIGHTS_FAILURE, isFetching:false, errorMessage};
}

export function searchFlights(market, currency, locale, originPlace, destinationPlace, fromDate, toDate) {
	return dispatch => {
		dispatch(searchFlightRequest());
		return FlightApi.searchFlights(market, currency, locale, originPlace, destinationPlace, fromDate, toDate).then(flights => {
			dispatch(searchFlightSuccess(flights));
		}).catch(error => {
			dispatch(searchFlightFailure(error.response.data));
		});
	};
}
