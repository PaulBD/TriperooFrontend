import PlaceApi from '../../api/legacy/mockPlaceApi';
import * as types from '../../actionTypes/';

export function loadPlaceSuccess(place) {
	return {type: types.LOAD_PLACE_SUCCESS, place: place};
}

export function loadPlace(id, type) {
	return dispatch => {
		return PlaceApi.getPlace(id, type).then(place => {
			dispatch(loadPlaceSuccess(place));
		}).catch(error => {
			throw(error);
		});
	};
}
