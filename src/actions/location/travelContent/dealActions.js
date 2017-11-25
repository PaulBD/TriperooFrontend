import HotelApi from '../../../api/location/travelContent/dealsApi';
import * as types from '../../../actionTypes/';

// ****************************************
// Load Hotel Deals Content
// ****************************************
export function dealsRequest() {
	return {type: types.DEALS_REQUEST, isFetching: true, hotelDeals: []};
}

export function dealsSuccess(deals) {
	return {type: types.DEALS_SUCCESS, deals};
}

export function dealsFailure(errorMessage) {
	return {type: types.DEALS_FAILURE, isFetching: false, errorMessage};
}

export function loadDealsByLocation(locationId, pageSize, pageNumber, exclude) {
	return dispatch => {
		dispatch(dealsRequest());
		return HotelApi.getDealsByLocation(locationId, pageSize, pageNumber, exclude).then(deals => {
			dispatch(dealsSuccess(deals));
		}).catch(error => {
			dispatch(dealsFailure(error.response.data));
		});
	};
}

