import ArticleApi from '../../api/location/articleApi';
import * as types from '../../actionTypes/';

// ****************************************
// Update Location
// ****************************************
export function requestLocationArticles(cmsLocation) {
  return {type: types.LOCATION_ARTICLES_REQUEST, isFetching: true, cmsLocation: cmsLocation};
}

export function loadLocationArticlesSuccess(articles) {
  return {type: types.LOCATION_ARTICLES_SUCCESS, isFetching: false, articles: articles};
}

export function locationArticlesFailure(errorMessage) {
  return {type: types.LOCATION_ARTICLES_FAILURE, isFetching: false,  errorMessage};
}

export function loadArticles(regionId) {
  return dispatch => {
    dispatch(requestLocationArticles(regionId));
    return ArticleApi.loadArticles(regionId).then(articles => {
      dispatch(loadLocationArticlesSuccess(articles));
    }).catch(error => {
      dispatch(locationArticlesFailure(error.response.data));
    });
  };
}

