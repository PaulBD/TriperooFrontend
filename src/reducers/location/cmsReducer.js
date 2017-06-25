import * as types from '../../actionTypes/';

export default function cmsReducer(state = { isFetching: false }, action) {
  switch(action.type) {
    case types.CMS_LOCATION_UPDATE_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.CMS_LOCATION_UPDATE_SUCCESS:
      return Object.assign({}, state, { isFetching: false, errorMessage: '', cmsLocation: action.cmsLocation });
    case types.CMS_LOCATION_UPDATE_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    default:
      return state;
  }
}
