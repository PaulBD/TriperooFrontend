import ContentApi from '../../../api/location/travelContent/contentApi';
import * as types from '../../../actionTypes/';

// ****************************************
// Load Attractions by parent location id
// ****************************************
export function requestAttractionsContent() {
  return {type: types.ATTRACTION_CONTENT_REQUEST, isFetching: true };
}

export function attractionsContentSuccess(attractionsList) {
  console.log(attractionsList);
  return {type: types.ATTRACTION_CONTENT_SUCCESS, isFetching: false, attractionsList};
}

export function attractionsContentError(errorMessage) {
  return {type: types.ATTRACTION_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadAttractionsByParentLocationId(locationId, categoryName, attractiontName, pageSize, pageNumber) {
  return dispatch => {
    dispatch(requestAttractionsContent());
    return ContentApi.getContentByParentLocationId(locationId, 'attractions', categoryName, attractiontName, pageSize, pageNumber).then(attractionsList => {
      dispatch(attractionsContentSuccess(attractionsList));
    }).catch(error => {
      dispatch(attractionsContentError(error.response.data));
    });
  };
}
