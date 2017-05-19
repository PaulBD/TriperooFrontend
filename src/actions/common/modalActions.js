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
	};
}

// ****************************************
// Edit Location
// ****************************************
export function openEditLocationModal(locationId, locationName, locationType) {
	return {type: types.OPEN_LOCATION_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'LocationModal' };
}

export function closeEditLocationModal() {
	return {type: types.CLOSE_LOCATION_MODEL, name: 'LocationModal'};
}

export function openEditLocation(locationId, locationName, locationType) {
	return dispatch => {
		dispatch(openEditLocationModal(locationId, locationName, locationType));
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
export function openQuestionAnswerModal(questionId, question) {
	return {type: types.OPEN_QUESTION_ANSWER_MODEL, question: question, questionId: questionId, name: 'QuestionAnswerModal' };
}

export function closeQuestionAnswerModal() {
	return {type: types.CLOSE_QUESTION_ANSWER_MODEL, name: 'QuestionAnswerModal'};
}

export function openQuestionAnswer(questionId, question) {
	return dispatch => {
		dispatch(openQuestionAnswerModal(questionId, question));
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
export function openBookmarkModal(locationId, locationName, locationType) {
	return {type: types.OPEN_BOOKMARK_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'BookmarkModal' };
}

export function closeBookmarkModal() {
	return {type: types.CLOSE_BOOKMARK_MODEL, name: 'BookmarkModal'};
}

export function openBookmark(locationId, locationName, locationType) {
	return dispatch => {
		dispatch(openBookmarkModal(locationId, locationName, locationType));
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

