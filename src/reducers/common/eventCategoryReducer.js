import * as types from '../../actionTypes/';

export default function eventCategoryReducer(state = { isFetching: false }, action) {
	switch(action.type) {

		case types.EVENT_CATEGORY_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.EVENT_CATEGORY_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', eventCategoryList: action.eventCategories });
		case types.EVENT_CATEGORY_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

		default:
			return state;
	}
}
