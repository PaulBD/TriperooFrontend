import RestaurantsApi from '../api/restaurantsApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Restaurants by parent location id
// ****************************************
export function requestRestaurantsContent() {
	return {type: types.RESTAURANT_CONTENT_REQUEST, isFetching: true };
}

export function restaurantsContentSuccess(restaurantsList) {
	return {type: types.RESTAURANT_CONTENT_SUCCESS, isFetching: false, restaurantsList};
}

export function restaurantsContentError(errorMessage) {
	return {type: types.RESTAURANT_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadRestaurantsByParentLocationId(parentLocationId, categoryName, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestRestaurantsContent());
		return RestaurantsApi.getRestaurantsByParentLocationId(parentLocationId, categoryName, pageSize, pageNumber).then(restaurantsList => {
			dispatch(restaurantsContentSuccess(restaurantsList));
		}).catch(error => {
			console.log(error);
			dispatch(restaurantsContentError(error.response.data));
		});
	};
}