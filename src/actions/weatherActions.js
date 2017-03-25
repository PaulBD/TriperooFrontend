import WeatherApi from '../api/weatherApi';
import * as types from '../actionTypes/';

// ****************************************
// Load Weather by latitude / longitude
// ****************************************
export function requestWeather() {
	return { type: types.WEATHER_REQUEST, isFetching: true };
}

export function weatherSuccess(weather) {
	return {type: types.WEATHER_SUCCESS, isFetching: false, weather};
}

export function weatherFailure(message) {
	return {type: types.WEATHER_FAILURE, isFetching: false,  message};
}

export function loadCurrentWeather(latitude, longitude, language) {
	return dispatch => {
		dispatch(requestWeather());
		return WeatherApi.getCurrentWeather(latitude, longitude, language).then(weather => {
			dispatch(weatherSuccess(weather));
		}).catch(error => {
			dispatch(weatherFailure(error));
		});
	};
}
