import CmsApi from '../../api/cms/cmsApi';
import * as types from '../../actionTypes/index';

// ****************************************
// Update Location
// ****************************************
export function requestLocationUpdate(cmsLocation) {
  return {type: types.CMS_LOCATION_UPDATE_REQUEST, isFetching: true, cmsLocation: cmsLocation};
}

export function loadLocationUpdateSuccess(cmsLocation) {
  return {type: types.CMS_LOCATION_UPDATE_SUCCESS, isFetching: false, cmsLocation: cmsLocation};
}

export function locationUpdateFailure(errorMessage) {
  return {type: types.CMS_LOCATION_UPDATE_FAILURE, isFetching: false,  errorMessage};
}

export function updateCMSLocation(cmsLocation) {
  return dispatch => {
    dispatch(requestLocationUpdate(cmsLocation));
    return CmsApi.updateCMSLocation(cmsLocation).then(cmsLocationResponse => {
      dispatch(loadLocationUpdateSuccess(cmsLocationResponse));
    }).catch(error => {
      dispatch(locationUpdateFailure(error.response.data));
    });
  };
}


// ****************************************
// Add New Location
// ****************************************
export function requestNewLocation(cmsLocation) {
  return {type: types.CMS_LOCATION_POST_REQUEST, isFetching: true, cmsLocation: cmsLocation};
}

export function loadNewLocationSuccess() {
  return {type: types.CMS_LOCATION_POST_SUCCESS, isFetching: false};
}

export function newLocationFailure(errorMessage) {
  return {type: types.CMS_LOCATION_POST_FAILURE, isFetching: false,  errorMessage};
}

export function addCMSLocation(cmsLocation) {
  return dispatch => {
    dispatch(requestNewLocation(cmsLocation));
    return CmsApi.addCMSLocation(cmsLocation).then(cmsLocationResponse => {
      dispatch(loadNewLocationSuccess());
    }).catch(error => {
      dispatch(newLocationFailure(error.response.data));
    });
  };
}
