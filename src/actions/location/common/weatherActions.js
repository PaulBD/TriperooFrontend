import WeatherApi from '../../../api/location/common/weatherApi';
import * as types from '../../../actionTypes/index';

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

export function loadCurrentWeather(locationId, isCity, language) {
	return dispatch => {
		dispatch(requestWeather());
		return WeatherApi.getCurrentWeather(locationId, isCity, language).then(weather => {
			dispatch(weatherSuccess(weather));
		}).catch(error => {
			dispatch(weatherFailure(error));
		});
	};
}
