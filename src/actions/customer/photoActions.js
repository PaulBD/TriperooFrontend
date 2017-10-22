import PhotoApi from '../../api/customer/photoApi';
import * as types from '../../actionTypes/';

// ****************************************
// Get Photos
// ****************************************
export function getUserPhotosInitialize() {
  return {type: types.GET_PHOTOS_REQUEST, isSending: true, hasPosted: false };
}

export function getUserPhotosSuccess(photos) {
  return {type: types.GET_PHOTOS_SUCCESS, isSending: false, hasPosted: true, photos};
}

export function getUserPhotosFailure(message) {
  return {type: types.GET_PHOTOS_FAILURE, isSending: false, hasPosted: false, message};
}

export function getUserPhotos(customerReference) {
  return dispatch => {
    dispatch(getUserPhotosInitialize());
    return PhotoApi.getUserPhotos(customerReference).then(photos => {
      dispatch(getUserPhotosSuccess(photos));
    }).catch(error => {
      dispatch(getUserPhotosFailure(error.response.data));
    });
  };
}

// ****************************************
// Remove Photo
// ****************************************
export function removePhotoInitialize() {
  return {type: types.REMOVE_PHOTO_REQUEST, isSending: true, hasPosted: false };
}

export function removePhotoSuccess() {
  return {type: types.REMOVE_PHOTO_SUCCESS, isSending: false, hasPosted: true };
}

export function removePhotoFailure(message) {
  return {type: types.REMOVE_PHOTO_FAILURE, isSending: false, hasPosted: false, message};
}

export function removePhoto(customerReference, photoReference) {
  return dispatch => {
    dispatch(removePhotoInitialize());
    return PhotoApi.removePhoto(customerReference, photoReference).then(photos => {
      dispatch(removePhotoSuccess());
    }).catch(error => {
      dispatch(removePhotoFailure(error.response.data));
    });
  };
}
