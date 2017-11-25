import * as types from '../../actionTypes/';

export default function locationsReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.CHILD_LOCATION_CONTENT_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.CHILD_LOCATION_CONTENT_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', locationsList: action.locationsList });
		case types.CHILD_LOCATION_CONTENT_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

    case types.OTHER_DESTINATIONS_REQUEST:
      return Object.assign({}, state, { isFetching: true });
    case types.OTHER_DESTINATIONS_SUCCESS:
      return Object.assign({}, state, { isFetching: false, errorMessage: '', otherDestinations: action.otherDestinations });
    case types.OTHER_DESTINATIONS_FAILURE:
      return Object.assign({}, state, { isFetching: false, errorMessage: action.message });


    case types.AUTOCOMPLETE_CLEAR:
			return Object.assign({}, state, { isFetching: false, autocompleteList: [] });
		case types.AUTOCOMPLETE_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.AUTOCOMPLETE_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', autocompleteList: action.autocompleteList });
		case types.AUTOCOMPLETE_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });

		case types.DESTINATIONS_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.DESTINATIONS_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', destinationList: action.destinations });
		case types.DESTINATIONS_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });


		default:
			return state;
	}
}
