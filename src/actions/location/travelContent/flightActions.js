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

export function searchFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimefrom, arrivalTimeto, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, selectedAirlines, offset, limit, sort, asc) {
	return dispatch => {
		dispatch(searchFlightRequest());
		return FlightApi.searchFlights(flyFrom, flyTo, dateFrom, dateTo, returnFrom, returnTo, market, locale, currency, flightType, passengerTotal, adultTotal, childTotal, infantTotal, directFlightsOnly, priceFrom, priceTo, departureTimeFrom, departureTimeTo, arrivalTimefrom, arrivalTimeto, returnDeperatureTimeFrom, returnDepartureTimeTo, returnArrivalTimeFrom, returnArrivalTimeTo, stopOverFrom, stopOverTo, selectedAirlines, offset, limit, sort, asc).then(flights => {
			dispatch(searchFlightSuccess(flights));
		}).catch(error => {
			dispatch(searchFlightFailure(error.response.data));
		});
	};
}


// ****************************************
// Load Airports (Kiwi)
// ****************************************
export function searchAirportsRequest() {
  return {type: types.SEARCH_AIRPORTS_REQUEST, isFetching: true, airports: []};
}

export function searchAirportsSuccess(airports) {
  return {type: types.SEARCH_AIRPORTS_SUCCESS, airports};
}

export function searchAirportsFailure(errorMessage) {
  return {type: types.SEARCH_AIRPORTS_FAILURE, isFetching:false, errorMessage};
}

export function searchAirports(term, locale) {
  return dispatch => {
    dispatch(searchAirportsRequest());
    return FlightApi.searchAirports(term, locale).then(airports => {
      dispatch(searchAirportsSuccess(airports));
    }).catch(error => {
      dispatch(searchAirportsFailure(error.response.data));
    });
  };
}


// ****************************************
// Clear Airport Autocomplete
// ****************************************

export function autoclearSuccess(autocompleteList) {
  return {type: types.AUTOCOMPLETE_AIRPORTS_CLEAR, airports: []};
}

export function clearAirports() {
  return dispatch => {
    dispatch(autoclearSuccess());
  };
}
