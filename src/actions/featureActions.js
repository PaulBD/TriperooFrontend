import FeatureApi from '../api/mockFeatureApi';
import {beginAjaxCall} from './ajaxStatusActions';
import * as types from '../actionTypes/';

export function loadFeaturesSuccess(features) {
	return {type: types.LOAD_FEATURE_SUCCESS, features};
}

export function loadFeatures(featureType) {
	return dispatch => {
		dispatch(beginAjaxCall());
		return FeatureApi.getFeatureForHeader(featureType).then(features => {
			dispatch(loadFeaturesSuccess(features));
		}).catch(error => {
			throw(error);
		});
	};
}

