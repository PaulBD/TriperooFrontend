import ContentApi from '../../../api/location/travelContent/contentApi';
import * as types from '../../../actionTypes/';

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

export function loadRestaurantsByParentLocationId(parentLocationId, categoryName, searchName, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestRestaurantsContent());
		return ContentApi.getContentByParentLocationId(parentLocationId, 'restaurant', categoryName, searchName, pageSize, pageNumber).then(restaurantsList => {
			dispatch(restaurantsContentSuccess(restaurantsList));
		}).catch(error => {
			dispatch(restaurantsContentError(error.response.data));
		});
	};
}
