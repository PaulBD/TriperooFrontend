import UserApi from '../../api/customer/userApi';
import * as types from '../../actionTypes/';


// ****************************************
// Update User
// ****************************************
export function updateUserInitialize(user) {
  return {type: types.UPDATE_USER_REQUEST, isSending: true, hasPosted: false, user};
}

export function updateUserSuccess(user) {
  return {type: types.UPDATE_USER_SUCCESS, isSending: false, hasPosted: true, user};
}

export function updateUserFailure(message) {
  return {type: types.UPDATE_USER_FAILURE, isSending: false, hasPosted: false, message};
}

export function updateUser(user) {
  return dispatch => {
    dispatch(updateUserInitialize(user));
    return UserApi.updateUser(user).then(updatedUser => {
      dispatch(updateUserSuccess(updatedUser.triperooCustomers));
    }).catch(error => {
      dispatch(updateUserFailure(error.response.data));
    });
  };

}

// ****************************************
// Get Authorized User
// ****************************************
export function getUserInitialize() {
  return {type: types.USER_REQUEST, isSending: true, hasPosted: false};
}

export function getUserSuccess(user) {
  return {type: types.USER_SUCCESS, isSending: false, hasPosted: true, user};
}

export function getUserFailure(message) {
  return {type: types.USER_FAILURE, isSending: false, hasPosted: false, message};
}

export function getUser(userReference) {
  return dispatch => {
    dispatch(getUserInitialize());
    return UserApi.getUser(userReference).then(user => {
      dispatch(getUserSuccess(user.triperooCustomers));
    }).catch(error => {
      console.log(error);
      dispatch(getUserFailure(error.response.data));
    });
  };
}

// ****************************************
// Get Bookmarks
// ****************************************
export function getBookmarkInitialize() {
  return {type: types.LOAD_BOOKMARK_REQUEST, isSending: true, hasPosted: false };
}

export function getBookmarkSuccess(bookmarks) {
  return {type: types.LOAD_BOOKMARK_SUCCESS, isSending: false, hasPosted: true, bookmarks};
}

export function getBookmarkFailure(message) {
  return {type: types.LOAD_BOOKMARK_FAILURE, isSending: false, hasPosted: false, message};
}

export function getBookmarks() {

  return dispatch => {
    dispatch(getBookmarkInitialize());
    return UserApi.getBookmarks().then(bookmarks => {
      dispatch(getBookmarkSuccess(bookmarks));
    }).catch(error => {
      dispatch(getBookmarkFailure(error.response.data));
    });
  };
}

// ****************************************
// Add new Bookmark
// ****************************************
export function postBookmarkInitialize(bookmark) {
  return {type: types.POST_BOOKMARK_REQUEST, isSending: true, hasPosted: false, bookmark};
}

export function postBookmarkSuccess() {
  return {type: types.POST_BOOKMARK_SUCCESS, isSending: false, hasPosted: true};
}

export function postBookmarkFailure(message) {
  return {type: types.POST_BOOKMARK_FAILURE, isSending: false, hasPosted: false, message};
}

export function postBookmark(bookmark) {
  return dispatch => {
    dispatch(postBookmarkInitialize(bookmark));
    if (bookmark.regionID > 0)
    {
      return UserApi.postBookmark(bookmark).then(bookmark => {
        dispatch(postBookmarkSuccess());
      }).catch(error => {
        dispatch(postBookmarkFailure(error.response.data));
      });
    }
    else {
      dispatch(postBookmarkFailure("An error has occurred whilst trying to bookmark this location"));
    }
  };
}


// ****************************************
// Archive Bookmark
// ****************************************
export function archiveBookmarkInitialize(locationId) {
  return {type: types.ARCHIVE_BOOKMARK_REQUEST, isSending: true, hasPosted: false, locationId};
}

export function archiveBookmarkSuccess() {
  return {type: types.ARCHIVE_BOOKMARK_SUCCESS, isSending: false, hasPosted: true};
}

export function archiveBookmarkFailure(message) {
  return {type: types.ARCHIVE_BOOKMARK_FAILURE, isSending: false, hasPosted: false, message};
}

export function archiveBookmark(locationId) {
  return dispatch => {
    dispatch(archiveBookmarkInitialize(locationId));
    return UserApi.archiveBookmark(locationId).then(bookmark => {
      dispatch(archiveBookmarkSuccess());
    }).catch(error => {
      dispatch(archiveBookmarkFailure(error.response.data));
    });
  };
}


// ****************************************
// Add new Photos
// ****************************************
export function postPhotoInitialize(location) {
  return {type: types.POST_PHOTO_REQUEST, isSending: true, hasPosted: false, location};
}

export function postPhotoSuccess() {
  return {type: types.POST_PHOTO_SUCCESS, isSending: false, hasPosted: true};
}

export function postPhotoFailure(message) {
  return {type: types.POST_PHOTO_FAILURE, isSending: false, hasPosted: false, message};
}

export function postPhoto(location, state) {

  return dispatch => {
    dispatch(postPhotoInitialize(location));
    if (location.locationId > 0)
    {
      return UserApi.postPhotos(location).then(location => {
        dispatch(postPhotoSuccess());
        state.setState({ wizardStep: 2, errors:'', location: '' });
      }).catch(error => {
        dispatch(postPhotoFailure(error.response.data));
      });
    }
    else {
      dispatch(postPhotoFailure("An error has occured whilst trying to add new photos for this location"));
    }
  };
}
