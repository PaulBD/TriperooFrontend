import * as types from '../../actionTypes/';

export function closeModal() {
	return dispatch => {
		dispatch(closeReviewModal());
		dispatch(closeQuestionModal());
		dispatch(closeQuestionAnswerModal());
		dispatch(closeLoginModal());
		dispatch(closeSignupModal());
		dispatch(closeBookmarkModal());
		dispatch(closePhotoModal());
		dispatch(closeEditLocationModal());
		dispatch(closeLocationImageModal());
	};
}

// ****************************************
// Edit Location
// ****************************************
export function openEditLocationModal(locationId, locationName, locationType, location) {
	return {type: types.OPEN_LOCATION_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'LocationModal', location: location };
}

export function closeEditLocationModal() {
	return {type: types.CLOSE_LOCATION_MODEL, name: 'LocationModal'};
}

export function openEditLocation(locationId, locationName, locationType, location) {
	return dispatch => {
		dispatch(openEditLocationModal(locationId, locationName, locationType, location));
	};
}


// ****************************************
// Location Images
// ****************************************
export function openLocationImageModal(imageList, imagePosition) {
  return {type: types.OPEN_LOCATION_IMAGE_MODEL, imageList: imageList, imagePosition: imagePosition, name: 'LocationImageModal' };
}

export function closeLocationImageModal() {
  return {type: types.CLOSE_LOCATION_IMAGE_MODEL, name: 'LocationImageModal'};
}

export function openLocationImage(imageList, imagePosition) {
  return dispatch => {
    dispatch(openLocationImageModal(imageList, imagePosition));
  };
}

// ****************************************
// Open review
// ****************************************
export function openReviewModal(locationId, locationName, locationType) {
	return {type: types.OPEN_REVIEW_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'ReviewModal' };
}

export function closeReviewModal() {
	return {type: types.CLOSE_REVIEW_MODEL, name: 'ReviewModal'};
}

export function openReview(locationId, locationName, locationType) {
	return dispatch => {
		dispatch(openReviewModal(locationId, locationName, locationType));
	};
}


// ****************************************
// Open question
// ****************************************
export function openQuestionModal(locationId, locationName, locationType) {
	return {type: types.OPEN_QUESTION_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'QuestionModal' };
}

export function closeQuestionModal() {
	return {type: types.CLOSE_QUESTION_MODEL, name: 'QuestionModal'};
}

export function openQuestion(locationId, locationName, locationType) {
	return dispatch => {
		dispatch(openQuestionModal(locationId, locationName, locationType));
	};
}

// ****************************************
// Open question answer
// ****************************************
export function openQuestionAnswerModal(questionReference, question, locationId, pageSize, pageNumber) {
	return {type: types.OPEN_QUESTION_ANSWER_MODEL, question: question, questionReference: questionReference, name: 'QuestionAnswerModal', locationId, pageSize, pageNumber };
}

export function closeQuestionAnswerModal() {
	return {type: types.CLOSE_QUESTION_ANSWER_MODEL, name: 'QuestionAnswerModal'};
}

export function openQuestionAnswer(questionId, question, locationId, pageSize, offset) {
	return dispatch => {
		dispatch(openQuestionAnswerModal(questionId, question, locationId, pageSize, offset));
	};
}

// ****************************************
// Open Login
// ****************************************
export function openLoginModal() {
	return {type: types.OPEN_LOGIN_MODEL, name: 'Login' };
}

export function closeLoginModal() {
	return {type: types.CLOSE_LOGIN_MODEL, name: 'Login'};
}

export function openLogin() {
	return dispatch => {
		dispatch(openLoginModal());
	};
}

// ****************************************
// Open Signup
// ****************************************
export function openSignupModal() {
	return {type: types.OPEN_SIGNUP_MODEL, name: 'Signup' };
}

export function closeSignupModal() {
	return {type: types.CLOSE_SIGNUP_MODEL, name: 'Signup'};
}

export function openSignup() {
	return dispatch => {
		dispatch(openSignupModal());
	};
}


// ****************************************
// Add Bookmark
// ****************************************
export function openBookmarkModal(parentLocationId, parentLocationName, parentLocationNameLong, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, removeBookmark) {
  return {type: types.OPEN_BOOKMARK_MODEL, parentLocationId: parentLocationId, parentLocationName: parentLocationName, parentLocationNameLong: parentLocationNameLong, locationId: locationId, locationName: locationName, locationType: locationType, locationNameLong: locationNameLong, locationUrl: locationUrl, locationImage: locationImage, removeBookmark: removeBookmark, name: 'BookmarkModal' };
}

export function closeBookmarkModal() {
	return {type: types.CLOSE_BOOKMARK_MODEL, name: 'BookmarkModal'};
}

export function openBookmark(parentLocationId, parentLocationName, parentLocationNameLong, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, removeBookmark) {
  console.log(locationImage);
	return dispatch => {
		dispatch(openBookmarkModal(parentLocationId, parentLocationName, parentLocationNameLong, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, removeBookmark));
	};
}


// ****************************************
// Add Bookmark
// ****************************************
export function openPhotoModal(locationId, locationName, locationType) {
	return {type: types.OPEN_PHOTO_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'PhotoModal' };
}

export function closePhotoModal() {
	return {type: types.CLOSE_PHOTO_MODEL, name: 'PhotoModal'};
}

export function openPhoto(locationId, locationName, locationType) {
	return dispatch => {
		dispatch(openPhotoModal(locationId, locationName, locationType));
	};
}

