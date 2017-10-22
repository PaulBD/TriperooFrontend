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
// Get Trips
// ****************************************
export function getTripsInitialize() {
  return {type: types.LOAD_TRIPS_REQUEST, isSending: true, hasPosted: false };
}

export function getTripsSuccess(trips) {
  return {type: types.LOAD_TRIPS_SUCCESS, isSending: false, hasPosted: true, trips};
}

export function getTripsFailure(message) {
  return {type: types.LOAD_TRIPS_FAILURE, isSending: false, hasPosted: false, message};
}

export function getTrips(customerReference) {

  return dispatch => {
    dispatch(getTripsInitialize());
    return UserApi.getTrips(customerReference).then(trips => {
      dispatch(getTripsSuccess(trips));
    }).catch(error => {
      dispatch(getTripsFailure(error.response.data));
    });
  };
}

// ****************************************
// Get Trip
// ****************************************
export function getTripInitialize(tripId) {
  return {type: types.LOAD_TRIP_REQUEST, isSending: true, hasPosted: false, tripId };
}

export function getTripSuccess(trip) {
  return {type: types.LOAD_TRIP_SUCCESS, isSending: false, hasPosted: true, trip};
}

export function getTripFailure(message) {
  return {type: types.LOAD_TRIP_FAILURE, isSending: false, hasPosted: false, message};
}

export function getTrip(tripId, customerReference) {

  return dispatch => {
    dispatch(getTripInitialize());
    return UserApi.getTrip(tripId, customerReference).then(trip => {
      dispatch(getTripSuccess(trip));
    }).catch(error => {
      dispatch(getTripFailure(error.response.data));
    });
  };
}

// ****************************************
// Add new Trip
// ****************************************
export function postTripInitialize(trip) {
  return {type: types.POST_TRIP_REQUEST, isSending: true, hasPosted: false, trip};
}

export function postTripSuccess(tripId) {
  return {type: types.POST_TRIP_SUCCESS, isSending: false, hasPosted: true, tripId};
}

export function postTripFailure(message) {
  return {type: types.POST_TRIP_FAILURE, isSending: false, hasPosted: false, message};
}

export function postTrip(trip) {
  return dispatch => {
    dispatch(postTripInitialize(trip));
    if (trip.regionId > 0)
    {
      return UserApi.postTrip(trip).then(tripId => {
        dispatch(postTripSuccess(tripId));
      }).catch(error => {
        dispatch(postTripFailure(error.response.data));
      });
    }
    else {
      dispatch(postTripFailure("An error has occurred whilst trying to create a new trip"));
    }
  };
}


// ****************************************
// Archive Trip
// ****************************************
export function archiveTripInitialize(tripId) {
  return {type: types.ARCHIVE_TRIP_REQUEST, isSending: true, hasPosted: false, tripId};
}

export function archiveTripSuccess() {
  return {type: types.ARCHIVE_TRIP_SUCCESS, isSending: false, hasPosted: true};
}

export function archiveTripFailure(message) {
  return {type: types.ARCHIVE_TRIP_FAILURE, isSending: false, hasPosted: false, message};
}

export function archiveTrip(tripId) {
  return dispatch => {
    dispatch(archiveTripInitialize(tripId));
    return UserApi.archiveTrip(tripId).then(() => {
      dispatch(archiveTripSuccess());
    }).catch(error => {
      dispatch(archiveTripFailure(error.response.data));
    });
  };
}


// ****************************************
// Get Bookmarks
// ****************************************
export function getBookmarkInitialize(tripId) {
  return {type: types.LOAD_BOOKMARK_REQUEST, isSending: true, hasPosted: false, tripId };
}

export function getBookmarkSuccess(bookmarks) {
  return {type: types.LOAD_BOOKMARK_SUCCESS, isSending: false, hasPosted: true, bookmarks};
}

export function getBookmarkFailure(message) {
  return {type: types.LOAD_BOOKMARK_FAILURE, isSending: false, hasPosted: false, message};
}

export function getBookmarks(tripId) {

  return dispatch => {
    dispatch(getBookmarkInitialize(tripId));
    return UserApi.getBookmarks(tripId).then(bookmarks => {
      dispatch(getBookmarkSuccess(bookmarks));
    }).catch(error => {
      dispatch(getBookmarkFailure(error.response.data));
    });
  };
}

// ****************************************
// Add new Bookmark
// ****************************************
export function postBookmarkInitialize(tripId, bookmark) {
  return {type: types.POST_BOOKMARK_REQUEST, isSending: true, hasPosted: false, tripId, bookmark};
}

export function postBookmarkSuccess() {
  return {type: types.POST_BOOKMARK_SUCCESS, isSending: false, hasPosted: true};
}

export function postBookmarkFailure(message) {
  return {type: types.POST_BOOKMARK_FAILURE, isSending: false, hasPosted: false, message};
}

export function postBookmark(tripId, location) {
  return dispatch => {
    dispatch(postBookmarkInitialize(tripId, location));
    if (location.regionID > 0)
    {
      return UserApi.postBookmark(tripId, location).then(bookmark => {
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
export function archiveBookmarkInitialize(tripId, locationId) {
  return {type: types.ARCHIVE_BOOKMARK_REQUEST, isSending: true, hasPosted: false, locationId, tripId};
}

export function archiveBookmarkSuccess() {
  return {type: types.ARCHIVE_BOOKMARK_SUCCESS, isSending: false, hasPosted: true};
}

export function archiveBookmarkFailure(message) {
  return {type: types.ARCHIVE_BOOKMARK_FAILURE, isSending: false, hasPosted: false, message};
}

export function archiveBookmark(tripId, locationId) {
  return dispatch => {
    dispatch(archiveBookmarkInitialize(tripId, locationId));
    return UserApi.archiveBookmark(tripId, locationId).then(bookmark => {
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


// ****************************************
// Insert New Visit
// ****************************************
export function visitInitialize(location) {
  return {type: types.VISIT_REQUEST, isSending: true, hasPosted: false, location};
}

export function visitSuccess() {
  return {type: types.VISIT_SUCCESS, isSending: false, hasPosted: true};
}

export function visitFailure(message) {
  return {type: types.VISIT_FAILURE, isSending: false, hasPosted: false, message};
}

export function postVisit(location) {
  return dispatch => {
    dispatch(visitInitialize(location));
    if (location.regionID > 0)
    {
      return UserApi.postVisit(location).then(visit => {
        dispatch(visitSuccess());
      }).catch(error => {
        dispatch(visitFailure(error.response.data));
      });
    }
    else {
      dispatch(visitFailure("An error has occurred whilst trying to mark this location as visited"));
    }
  };
}
