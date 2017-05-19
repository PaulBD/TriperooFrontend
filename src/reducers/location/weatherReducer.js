import * as types from '../../actionTypes/';

export default function weatherReducer(state = { isFetching: false }, action) {
	switch(action.type) {
		case types.WEATHER_REQUEST:
			return Object.assign({}, state, { isFetching: true });
		case types.WEATHER_SUCCESS:
			return Object.assign({}, state, { isFetching: false, errorMessage: '', weather: action.weather });
		case types.WEATHER_FAILURE:
			return Object.assign({}, state, { isFetching: false, errorMessage: action.message });
			
		default:
			return state;
	}
}
