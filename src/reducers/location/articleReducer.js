import * as types from '../../actionTypes/';

export default function articleReducer(state = { isFetching: false }, action) {
  switch(action.type) {
    case types.LOCATION_ARTICLES_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.LOCATION_ARTICLES_SUCCESS:
      return Object.assign({}, state, { isFetching: false, errorMessage: '', articles: action.articles });
    case types.LOCATION_ARTICLES_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    default:
      return state;
  }
}
