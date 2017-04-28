import * as types from '../actionTypes/';

export default function categoryReducer(state = { isFetching: false }, action) {
	switch(action.type) {

		case types.EVENT_CATEGORY_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.EVENT_CATEGORY_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', categoryList: action.eventCategories });
		case types.EVENT_CATEGORY_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
		
		case types.ATTRACTION_CATEGORY_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.ATTRACTION_CATEGORY_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', categoryList: action.attractionCategories });
		case types.ATTRACTION_CATEGORY_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
					
		case types.RESTAURANT_CATEGORY_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.RESTAURANT_CATEGORY_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', categoryList: action.restaurantCategories });
		case types.RESTAURANT_CATEGORY_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
					
		case types.NIGHTLIFE_CATEGORY_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.NIGHTLIFE_CATEGORY_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', categoryList: action.nightlifeCategories });
		case types.NIGHTLIFE_CATEGORY_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
			
		default:
			return state;
	}
}
