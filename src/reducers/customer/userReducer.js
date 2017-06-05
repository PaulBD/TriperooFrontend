import * as types from '../../actionTypes/';

export default function userReducer(state = { isSending: false, hasPosted: false }, action) {
  switch(action.type) {

    case types.UPDATE_USER_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false, isUpdating: true, user: action.user});
    case types.UPDATE_USER_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, isUpdating: true, errorMessage: '', user: action.user });
    case types.UPDATE_USER_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, isUpdating: false, errorMessage: action.message });

    case types.USER_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false});
    case types.USER_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', user: action.user });
    case types.USER_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.LOAD_BOOKMARK_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false});
    case types.LOAD_BOOKMARK_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', bookmarks: action.bookmarks });
    case types.LOAD_BOOKMARK_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.POST_BOOKMARK_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false});
    case types.POST_BOOKMARK_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
    case types.POST_BOOKMARK_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.LOAD_TRIPS_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false});
    case types.LOAD_TRIPS_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', trips: action.trips });
    case types.LOAD_TRIPS_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.LOAD_TRIP_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false});
    case types.LOAD_TRIP_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', trip: action.trip });
    case types.LOAD_TRIP_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.POST_TRIP_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false});
    case types.POST_TRIP_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', tripId: action.tripId });
    case types.POST_TRIP_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.ARCHIVE_TRIP_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false});
    case types.ARCHIVE_TRIP_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
    case types.ARCHIVE_TRIP_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });


    case types.POST_PHOTO_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false});
    case types.POST_PHOTO_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
    case types.POST_PHOTO_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    default:
      return state;
  }
}
