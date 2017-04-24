import AttractionsApi from '../api/attractionsApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Attractions by parent location id
// ****************************************
export function requestAttractionsContent() {
	return {type: types.ATTRACTION_CONTENT_REQUEST, isFetching: true };
}

export function attractionsContentSuccess(attractionsList) {
	return {type: types.ATTRACTION_CONTENT_SUCCESS, isFetching: false, attractionsList};
}

export function attractionsContentError(errorMessage) {
	return {type: types.ATTRACTION_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadAttractionsByParentLocationId(parentLocationId, categoryName, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestAttractionsContent());
		return AttractionsApi.getAttractionsByParentLocationId(parentLocationId, categoryName, pageSize, pageNumber).then(attractionsList => {
			dispatch(attractionsContentSuccess(attractionsList));
		}).catch(error => {
			dispatch(attractionsContentError(error.response.data));
		});
	};
}


// ****************************************
// Load Event Categories
// ****************************************
export function requestAttractionCategories() {
	return { type: types.ATTRACTION_CATEGORY_REQUEST, isFetching: true };
}

export function loadAttractionCategoriesSuccess(attractionCategories) {
	return {type: types.ATTRACTION_CATEGORY_SUCCESS, isFetching: false, attractionCategories};
}

export function attractionCategoriesFailure(errorMessage) {
	return {type: types.ATTRACTION_CATEGORY_FAILURE, isFetching: false,  errorMessage};
}

export function loadAttractionCategories() {
	return dispatch => {
		dispatch(requestAttractionCategories());
		return AttractionsApi.getAttractionCategories().then(attractionCategories => {
			dispatch(loadAttractionCategoriesSuccess(attractionCategories));
		}).catch(error => {
			dispatch(attractionCategoriesFailure('Unable to load attraction categories'));
		});
	};
}