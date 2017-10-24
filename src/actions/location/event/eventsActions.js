import EventsApi from '../../../api/location/events/eventsApi';
import * as types from '../../../actionTypes/';

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

export function loadEvents(locationId, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestEventContent());
		return EventsApi.getEventsByLocationId(locationId, 'all', pageSize, pageNumber).then(locationEvents => {
			dispatch(loadEventContentSuccess(locationEvents));
		}).catch(error => {
			dispatch(eventContentFailure(error.response.data));
		});
	};
}

// ****************************************
// Load Events by Location Name And Keywords
// ****************************************
export function requestEventContentKeyword() {
  return { type: types.EVENT_CONTENT_KEYWORD_REQUEST, isFetching: true };
}

export function loadEventContentKeywordSuccess(locationEvents) {
  return {type: types.EVENT_CONTENT_KEYWORD_SUCCESS, isFetching: false, locationEvents};
}

export function eventContentKeywordFailure(message) {
  return {type: types.EVENT_CONTENT_KEYWORD_FAILURE, isFetching: false,  message};
}

export function loadEventsByKeyword(locationId, keyword, pageSize, pageNumber) {
  return dispatch => {
    dispatch(requestEventContentKeyword());
    return EventsApi.getEventsByLocationIdAndKeyword(locationId, keyword, pageSize, pageNumber).then(locationEvents => {
      dispatch(loadEventContentKeywordSuccess(locationEvents));
    }).catch(error => {
      dispatch(eventContentKeywordFailure(error.response.data));
    });
  };
}

// ****************************************
// Load Events by Location Name & Category
// Name
// ****************************************
export function requestEventByCategory() {
	return { type: types.EVENTS_BY_CATEGORY_REQUEST, isFetching: true };
}

export function eventByCategorySuccess(locationEvents) {
	return {type: types.EVENTS_BY_CATEGORY_SUCCESS, isFetching: false, locationEvents};
}

export function eventByCategoryFailure(message) {
	return {type: types.EVENTS_BY_CATEGORY_FAILURE, isFetching: false,  message};
}


export function loadEventsByCategory(locationId, categoryName, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestEventByCategory());
		return EventsApi.getEventsByLocationId(locationId, categoryName, pageSize, pageNumber).then(locationEvents => {
			dispatch(eventByCategorySuccess(locationEvents));
		}).catch(error => {
			console.log(error);
			dispatch(eventByCategoryFailure(error.response.data));
		});
	};
}

// ****************************************
// Load Event Categories
// ****************************************
export function requestEventCategories() {
	return { type: types.EVENT_CATEGORY_REQUEST, isFetching: true };
}

export function loadEventCategoriesSuccess(eventCategories) {
	return {type: types.EVENT_CATEGORY_SUCCESS, isFetching: false, eventCategories};
}

export function eventCategoriesFailure(errorMessage) {
	return {type: types.EVENT_CATEGORY_FAILURE, isFetching: false,  errorMessage};
}

export function loadEventCategories() {
	return dispatch => {
		dispatch(requestEventCategories());
		return EventsApi.getEventCategories().then(eventCategories => {
			dispatch(loadEventCategoriesSuccess(eventCategories));
		}).catch(error => {
			console.log(error);
			dispatch(eventCategoriesFailure('Unable to load events categories'));
		});
	};
}
