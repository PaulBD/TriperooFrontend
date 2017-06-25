import CmsApi from '../../api/location/cmsApi';
import * as types from '../../actionTypes/';

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

