import * as types from '../../actionTypes/';

export default function attractionsReducer(state = { isFetching: false }, action) {
  switch(action.type) {
    case types.ATTRACTION_CONTENT_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.ATTRACTION_CONTENT_SUCCESS:
      return Object.assign({}, state, { isFetching: false, errorMessage: '', attractionsList: action.attractionsList });
    case types.ATTRACTION_CONTENT_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    default:
      return state;
  }
}
