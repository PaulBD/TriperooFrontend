import * as types from '../../actionTypes/';

export default function userFollowReducer(state = { isSending: false, hasPosted: false }, action) {
  switch(action.type) {
    case types.FOLLOW_USER_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false, userReference: action.userReference });
    case types.FOLLOW_USER_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
    case types.FOLLOW_USER_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.UNFOLLOW_USER_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false, userReference: action.userReference });
    case types.UNFOLLOW_USER_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
    case types.UNFOLLOW_USER_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.FOLLOWING_USER_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false, userReference: action.userReference });
    case types.FOLLOWING_USER_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', users: action.users });
    case types.FOLLOWING_USER_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    case types.FOLLOWED_BY_USER_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false, userReference: action.userReference });
    case types.FOLLOWED_BY_USER_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '', users: action.users });
    case types.FOLLOWED_BY_USER_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message });

    default:
      return state;
  }
}
