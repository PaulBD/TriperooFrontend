import WeatherApi from '../api/weatherApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadCurrentWeatherSuccess(weather) {
	return {type: types.LOAD_CURRENT_WEATHER_SUCCESS, weather};
}

export function loadCurrentWeather(id) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return WeatherApi.getCurrentWeather(id).then(weather => {
			dispatch(loadCurrentWeatherSuccess(weather));
		}).catch(error => {
			throw(error);
		});
	};
}
