import CategoryApi from '../../api/legacy/categoryApi';
import * as types from '../../actionTypes/index';

// ****************************************
// Load Event Categories
// ****************************************
export function requestEventCategories() {
	return { type: types.EVENT_CATEGORY_REQUEST, isFetching: true };
}

export function loadEventCategoriesSuccess(eventCategories) {
	return {type: types.EVENT_CATEGORY_SUCCESS, isFetching: false, eventCategories};
}

export function eventCategoriesFailure(errorMessage) {
	return {type: types.EVENT_CATEGORY_FAILURE, isFetching: false,  errorMessage};
}

export function loadEventCategories() {
	return dispatch => {
		dispatch(requestEventCategories());
		return CategoryApi.getEventCategories().then(eventCategories => {
			dispatch(loadEventCategoriesSuccess(eventCategories));
		}).catch(error => {
			dispatch(eventCategoriesFailure('Unable to load events categories'));
		});
	};
}

// ****************************************
// Load Attraction Categories
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
		return CategoryApi.getAttractionCategories().then(attractionCategories => {
			dispatch(loadAttractionCategoriesSuccess(attractionCategories));
		}).catch(error => {
			dispatch(attractionCategoriesFailure('Unable to load attraction categories'));
		});
	};
}

// ****************************************
// Load Restaurant Categories
// ****************************************
export function requestRestaurantCategories() {
	return { type: types.RESTAURANT_CATEGORY_REQUEST, isFetching: true };
}

export function loadRestaurantCategoriesSuccess(restaurantCategories) {
	return {type: types.RESTAURANT_CATEGORY_SUCCESS, isFetching: false, restaurantCategories};
}

export function restaurantCategoriesFailure(errorMessage) {
	return {type: types.RESTAURANT_CATEGORY_FAILURE, isFetching: false,  errorMessage};
}

export function loadRestaurantCategories() {
	return dispatch => {
		dispatch(requestRestaurantCategories());
		return CategoryApi.getRestaurantCategories().then(restaurantCategories => {
			dispatch(loadRestaurantCategoriesSuccess(restaurantCategories));
		}).catch(error => {
			dispatch(restaurantCategoriesFailure('Unable to load restaurant categories'));
		});
	};
}

// ****************************************
// Load Nightlife Categories
// ****************************************
export function requestNightlifeCategories() {
	return { type: types.NIGHTLIFE_CATEGORY_REQUEST, isFetching: true };
}

export function loadNightlifeCategoriesSuccess(nightlifeCategories) {
	return {type: types.NIGHTLIFE_CATEGORY_SUCCESS, isFetching: false, nightlifeCategories};
}

export function nightlifeCategoriesFailure(errorMessage) {
	return {type: types.NIGHTLIFE_CATEGORY_FAILURE, isFetching: false,  errorMessage};
}

export function loadNightlifeCategories() {
	return dispatch => {
		dispatch(requestNightlifeCategories());
		return CategoryApi.getNightlifeCategories().then(restaurantCategories => {
			dispatch(loadNightlifeCategoriesSuccess(restaurantCategories));
		}).catch(error => {
			dispatch(nightlifeCategoriesFailure('Unable to load nightlife categories'));
		});
	};
}
