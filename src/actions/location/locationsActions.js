import LocationsApi from '../../api/location/locationsApi';
import * as types from '../../actionTypes/';

// ****************************************
// Load Location by parent location id
// ****************************************
export function requestChildLocationsContent() {
  return {type: types.CHILD_LOCATION_CONTENT_REQUEST, isFetching: true };
}

export function childLocationContentSuccess(locationsList) {
  return {type: types.CHILD_LOCATION_CONTENT_SUCCESS, isFetching: false, locationsList};
}

export function childLocationContentError(errorMessage) {
  return {type: types.CHILD_LOCATION_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadLocationsByParentLocationId(parentLocationId, type, name, pageSize, pageNumber) {
  return dispatch => {
    dispatch(requestChildLocationsContent());
    return LocationsApi.getLocationsByParentId(parentLocationId, type, name, pageSize, pageNumber).then(locationsList => {
      dispatch(childLocationContentSuccess(locationsList));
    }).catch(error => {
      dispatch(childLocationContentError(error));
    });
  };
}

// ****************************************
// Load Other Destinations excluding location id
// ****************************************
export function requestOtherLocations() {
  return {type: types.OTHER_DESTINATIONS_REQUEST, isFetching: true };
}

export function otherDestinationsSuccess(otherDestinations) {
  return {type: types.OTHER_DESTINATIONS_SUCCESS, isFetching: false, otherDestinations};
}

export function otherDestinationsError(errorMessage) {
  return {type: types.OTHER_DESTINATIONS_FAILURE, isFetching: false,  errorMessage};
}

export function loadOtherDestinations(parentLocationId, type, name, pageSize, pageNumber) {
  return dispatch => {
    dispatch(requestOtherLocations());
    return LocationsApi.getLocationsByParentId(parentLocationId, type, name, pageSize, pageNumber).then(otherDestinations => {
      dispatch(otherDestinationsSuccess(otherDestinations));
    }).catch(error => {
      dispatch(otherDestinationsError(error));
    });
  };
}

// ****************************************
// Autocomplete
// ****************************************
export function autocompleteRequest() {
  return {type: types.AUTOCOMPLETE_REQUEST };
}
export function autocompleteSuccess(autocompleteList) {
  return {type: types.AUTOCOMPLETE_SUCCESS, autocompleteList};
}

export function autocompleteFailure(message) {
  return {type: types.AUTOCOMPLETE_FAILURE, autocompleteList: [], message};
}

export function searchLocations(value, searchType) {
  return dispatch => {
    dispatch(autocompleteRequest());
    if (value.length > 0)
    {
      return LocationsApi.searchLocations(value, searchType).then(autocompleteList => {
        dispatch(autocompleteSuccess(autocompleteList));
      }).catch(error => {
        dispatch(autocompleteFailure(error));
      });
    }
    else {
      dispatch(autocompleteFailure('No searchForms value specified'));
    }
  };
}

// ****************************************
// Autocomplete
// ****************************************

export function autoclearSuccess(autocompleteList) {
  return {type: types.AUTOCOMPLETE_CLEAR, autocompleteList: []};
}

export function clearLocations() {
  return dispatch => {
    dispatch(autoclearSuccess());
  };
}

// ****************************************
// Load Destination from hard coded json
// ****************************************
export function topLocationRequest() {
  return {type: types.DESTINATIONS_REQUEST, isFetching: true};
}
export function topLocationSuccess(destinations) {
  return {type: types.DESTINATIONS_SUCCESS, isFetching: false, destinations};
}
export function topLocationFailure(message) {
  return {type: types.DESTINATIONS_FAILURE, isFetching: false, message};
}

export function loadTopLocations(size, contentType) {
  return dispatch => {
    dispatch(topLocationRequest());
    return LocationsApi.getTopLocations(size, contentType).then(destinations => {
      dispatch(topLocationSuccess(destinations));
    }).catch(error => {
      dispatch(topLocationFailure(error));
    });
  };
}
