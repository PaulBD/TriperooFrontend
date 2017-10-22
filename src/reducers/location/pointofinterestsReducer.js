import * as types from '../../actionTypes/';

export default function pointofinterestsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.POI_CONTENT_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.POI_CONTENT_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', pointOfInterestsList: action.pointOfInterestsList });
		case types.POI_CONTENT_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

		default:
			return state;
	}
}
