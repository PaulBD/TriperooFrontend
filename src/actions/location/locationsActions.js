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

export function loadLocationsByParentLocationId(parentLocationId, type, pageSize, pageNumber) {
  return dispatch => {
    dispatch(requestChildLocationsContent());
    return LocationsApi.getLocationsByParentId(parentLocationId, type, pageSize, pageNumber).then(locationsList => {
      dispatch(childLocationContentSuccess(locationsList));
    }).catch(error => {
      dispatch(childLocationContentError(error));
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
      dispatch(autocompleteFailure('No search value specified'));
    }
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
