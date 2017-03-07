import TopDestinationsApi from '../api/topDestinationsApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadTopDestinationSuccess(destinations) {
	return {type: types.LOAD_TOP_DESTINATIONS_SUCCESS, destinations};
}

export function loadTopDestination(size) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return TopDestinationsApi.getTopDestinations(size).then(destinations => {
			dispatch(loadTopDestinationSuccess(destinations));
		}).catch(error => {
			throw(error);
		});
	};
}