import DestinationsApi from '../api/destinationsApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Destination from hard coded json
// ****************************************
export function destinationRequest() {
	return {type: types.DESTINATIONS_REQUEST, isFetching: true};
}
export function destinationSuccess(destinations) {
	return {type: types.DESTINATIONS_SUCCESS, isFetching: false, destinations};
}
export function destinationFailure(message) {
	return {type: types.DESTINATIONS_FAILURE, isFetching: false, message};
}

export function loadDestinations(size, contentType) {
	return dispatch => {
		dispatch(destinationRequest());
		return DestinationsApi.getDestinations(size, contentType).then(destinations => {
			dispatch(destinationSuccess(destinations));
		}).catch(error => {
			dispatch(destinationFailure(error));
		});
	};
}