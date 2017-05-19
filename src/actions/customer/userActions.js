import UserApi from '../../api/customer/userApi';
import * as types from '../../actionTypes/';

// ****************************************
// Add new Bookmark
// ****************************************
export function postBookmarkInitialize(location) {
	return {type: types.POST_BOOKMARK_REQUEST, isSending: true, hasPosted: false, location};
}

export function postBookmarkSuccess() {
	return {type: types.POST_BOOKMARK_SUCCESS, isSending: false, hasPosted: true};
}

export function postBookmarkFailure(message) {
	return {type: types.POST_BOOKMARK_FAILURE, isSending: false, hasPosted: false, message};
}

export function postBookmark(bookmark) {

	return dispatch => {
		dispatch(postBookmarkInitialize(bookmark));
		if (bookmark.locationId > 0)
		{
			return UserApi.postBookmark(bookmark).then(bookmark => {
				dispatch(postBookmarkSuccess());  
			}).catch(error => {
				dispatch(postBookmarkFailure(error.response.data));
			});
		}
		else {
			dispatch(postBookmarkFailure("An error has occured whilst trying to bookmark this location"));
		}
	};
}


// ****************************************
// Add new Photos
// ****************************************
export function postPhotoInitialize(location) {
	return {type: types.POST_PHOTO_REQUEST, isSending: true, hasPosted: false, location};
}

export function postPhotoSuccess() {
	return {type: types.POST_PHOTO_SUCCESS, isSending: false, hasPosted: true};
}

export function postPhotoFailure(message) {
	return {type: types.POST_PHOTO_FAILURE, isSending: false, hasPosted: false, message};
}

export function postPhoto(location, state) {

	return dispatch => {
		dispatch(postPhotoInitialize(location));
		if (location.locationId > 0)
		{
			return UserApi.postPhotos(location).then(location => {
				dispatch(postPhotoSuccess());
				state.setState({ wizardStep: 2, errors:'', location: '' });    
			}).catch(error => {
				dispatch(postPhotoFailure(error.response.data));
			});
		}
		else {
			dispatch(postPhotoFailure("An error has occured whilst trying to add new photos for this location"));
		}
	};
}