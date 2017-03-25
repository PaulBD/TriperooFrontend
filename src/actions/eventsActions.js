import EventsApi from '../api/eventsApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Events by Location Name
// ****************************************
export function requestEventContent() {
	return { type: types.EVENT_CONTENT_REQUEST, isFetching: true };
}

export function loadEventContentSuccess(locationEvents) {
	return {type: types.EVENT_CONTENT_SUCCESS, isFetching: false, locationEvents};
}

export function eventContentFailure(message) {
	return {type: types.EVENT_CONTENT_FAILURE, isFetching: false,  message};
}

export function loadEvents(locationName, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestEventContent());
		return EventsApi.getEventsByLocationName(locationName, pageSize, pageNumber).then(locationEvents => {
			dispatch(loadEventContentSuccess(locationEvents));
		}).catch(error => {
			console.log(error);
			dispatch(eventContentFailure(error.response.data));
		});
	};
}