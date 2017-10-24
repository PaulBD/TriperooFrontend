import ContentApi from '../../../api/location/travelContent/contentApi';
import * as types from '../../../actionTypes/';

// ****************************************
// Load nightlife by parent location id
// ****************************************
export function requestNightlifeContent() {
	return {type: types.NIGHTLIFE_CONTENT_REQUEST, isFetching: true };
}

export function nightlifeContentSuccess(nightlifeList) {
	return {type: types.NIGHTLIFE_CONTENT_SUCCESS, isFetching: false, nightlifeList};
}

export function nightlifeContentError(errorMessage) {
	return {type: types.NIGHTLIFE_CONTENT_FAILURE, isFetching: false,  errorMessage};
}

export function loadNightlifeByParentLocationId(parentLocationId, categoryName, pageSize, pageNumber) {
	return dispatch => {
		dispatch(requestNightlifeContent());
		return ContentApi.getContentByParentLocationId(parentLocationId, 'nightlife', categoryName, pageSize, pageNumber).then(nightlifeList => {
			dispatch(nightlifeContentSuccess(nightlifeList));
		}).catch(error => {
			dispatch(nightlifeContentError(error.response.data));
		});
	};
}
