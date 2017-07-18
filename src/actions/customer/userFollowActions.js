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


// ****************************************
// Get Following
// ****************************************
export function getFollowingInitialize(customerReference) {
  return {type: types.FOLLOWING_USER_REQUEST, isSending: true, hasPosted: false, customerReference};
}

export function getFollowingSuccess(users) {
  return {type: types.FOLLOWING_USER_SUCCESS, isSending: false, hasPosted: true, users };
}

export function getFollowingFailure(message) {
  return {type: types.FOLLOWING_USER_FAILURE, isSending: false, hasPosted: false, message};
}

export function getFollowing(customerReference) {
  return dispatch => {
    dispatch(getFollowingInitialize(customerReference));
    return UserFollowApi.getFollowing(customerReference).then(users => {
      dispatch(getFollowingSuccess(users));
    }).catch(error => {
      dispatch(getFollowingFailure(error.response.data));
    });
  };
}


// ****************************************
// Get Followed By
// ****************************************
export function getFollowedByInitialize(customerReference) {
  return {type: types.FOLLOWED_BY_USER_REQUEST, isSending: true, hasPosted: false, customerReference};
}

export function getFollowedBySuccess(users) {
  return {type: types.FOLLOWED_BY_USER_SUCCESS, isSending: false, hasPosted: true, users };
}

export function getFollowedByFailure(message) {
  return {type: types.FOLLOWED_BY_USER_FAILURE, isSending: false, hasPosted: false, message};
}

export function getFollowedBy(customerReference) {
  return dispatch => {
    dispatch(getFollowedByInitialize(customerReference));
    return UserFollowApi.getFollowedBy(customerReference).then(users => {
      dispatch(getFollowedBySuccess(users));
    }).catch(error => {
      dispatch(getFollowedByFailure(error.response.data));
    });
  };
}
