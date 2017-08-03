import FlightApi from '../../../api/location/travelContent/flightApi';
import * as types from '../../../actionTypes/';

// ****************************************
// Load Flights (Kiwi)
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

export function searchFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimefrom, arrivalTimeto, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, offset, limit, sort, asc) {
	return dispatch => {
		dispatch(searchFlightRequest());
		return FlightApi.searchFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimefrom, arrivalTimeto, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, offset, limit, sort, asc).then(flights => {
			dispatch(searchFlightSuccess(flights));
			console.log(flights);
		}).catch(error => {
			dispatch(searchFlightFailure(error.response.data));
		});
	};
}
