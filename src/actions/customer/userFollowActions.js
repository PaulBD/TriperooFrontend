import UserFollowApi from '../../api/customer/userFollowApi';
import * as types from '../../actionTypes/';


// ****************************************
// Follow User
// ****************************************
export function followUserInitialize(userReference) {
  return {type: types.FOLLOW_USER_REQUEST, isSending: true, hasPosted: false, userReference};
}

export function followUserSuccess() {
  return {type: types.FOLLOW_USER_SUCCESS, isSending: false, hasPosted: true };
}

export function followUserFailure(message) {
  return {type: types.FOLLOW_USER_FAILURE, isSending: false, hasPosted: false, message};
}

export function followUser(userReference) {
  return dispatch => {
    dispatch(followUserInitialize(userReference));
    return UserFollowApi.followUser(userReference).then(updatedUser => {
      dispatch(followUserSuccess());
    }).catch(error => {
      dispatch(followUserFailure(error.response.data));
    });
  };
}

// ****************************************
// Unfollow User
// ****************************************
export function unfollowUserInitialize(userReference) {
  return {type: types.UNFOLLOW_USER_REQUEST, isSending: true, hasPosted: false, userReference};
}

export function unfollowUserSuccess() {
  return {type: types.UNFOLLOW_USER_SUCCESS, isSending: false, hasPosted: true };
}

export function unfollowUserFailure(message) {
  return {type: types.UNFOLLOW_USER_FAILURE, isSending: false, hasPosted: false, message};
}

export function unfollowUser(userReference) {
  return dispatch => {
    dispatch(unfollowUserInitialize(userReference));
    return UserFollowApi.unfollowUser(userReference).then(updatedUser => {
      dispatch(unfollowUserSuccess());
    }).catch(error => {
      dispatch(unfollowUserFailure(error.response.data));
    });
  };
}

