import * as types from '../../actionTypes/';

export default function photoReducer(state = { isSending: false, hasPosted: false }, action) {
  switch(action.type) {

    case types.GET_PHOTOS_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false, isUpdating: true });
    case types.GET_PHOTOS_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, isUpdating: true, errorMessage: '', photos: action.photos });
    case types.GET_PHOTOS_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, isUpdating: false, errorMessage: action.message });

    case types.REMOVE_PHOTO_REQUEST:
      return Object.assign({}, state, { isSending: true, hasPosted: false, isUpdating: true });
    case types.REMOVE_PHOTO_SUCCESS:
      return Object.assign({}, state, { isSending: false, hasPosted: true, isUpdating: true, errorMessage: '' });
    case types.REMOVE_PHOTO_FAILURE:
      return Object.assign({}, state, { isSending: false, hasPosted: false, isUpdating: false, errorMessage: action.message });

    default:
      return state;
  }
}
