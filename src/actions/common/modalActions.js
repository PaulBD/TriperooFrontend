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
    dispatch(closeHotelImageModal());
		dispatch(closeEditReviewModal());
    dispatch(closeCancellationPolicyModal());
    dispatch(closeMapSideBarModal());
    dispatch(closeCategoryModel());
    dispatch(closeVisitModal());
	};
}

// ****************************************
// Cancellation Policy
// ****************************************
export function openCancellationPolicyModal(policy) {
  return {type: types.OPEN_POLICY_MODEL, policy: policy, name: 'PolicyModal' };
}

export function closeCancellationPolicyModal() {
  return {type: types.CLOSE_POLICY_MODEL, name: 'PolicyModal'};
}

export function openCancellationPolicy(policy) {
  return dispatch => {
    dispatch(openCancellationPolicyModal(policy));
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

export function openLocationImage(imageList, imagePosition, imageName) {
  return dispatch => {
    dispatch(openLocationImageModal(imageList, imagePosition, imageName));
  };
}

// ****************************************
// Hotel Images
// ****************************************
export function openHotelImageModal(imageList, imagePosition, hotelName) {
  return {type: types.OPEN_HOTEL_IMAGE_MODEL, imageList: imageList, imagePosition: imagePosition, hotelName: hotelName, name: 'HotelImageModal' };
}

export function closeHotelImageModal() {
  return {type: types.CLOSE_HOTEL_IMAGE_MODEL, name: 'HotelImageModal'};
}

export function openHotelImage(imageList, imagePosition, hotelName) {
  return dispatch => {
    dispatch(openHotelImageModal(imageList, imagePosition, hotelName));
  };
}

// ****************************************
// Open review
// ****************************************
export function openReviewModal(locationId, locationName, locationType, pageSize, pageNumber) {
	return {type: types.OPEN_REVIEW_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'ReviewModal', pageSize, pageNumber };
}

export function closeReviewModal() {
	return {type: types.CLOSE_REVIEW_MODEL, name: 'ReviewModal'};
}

export function openReview(locationId, locationName, locationType, pageSize, pageNumber) {
	return dispatch => {
		dispatch(openReviewModal(locationId, locationName, locationType, pageSize, pageNumber));
	};
}

// ****************************************
// Edit review
// ****************************************
export function editReviewModal(reference, locationId, locationName, locationType, locationAddress, starRating, comment, tags, currentUserId) {
  return {type: types.EDIT_REVIEW_MODEL, name: 'EditReviewModal', reference, locationId, locationName, locationType, locationAddress, starRating, comment, tags, currentUserId};
}

export function closeEditReviewModal() {
  return {type: types.CLOSE_EDIT_REVIEW_MODEL, name: 'EditReviewModal'};
}

export function openEditReview(reference, locationId, locationName, locationType, locationAddress, starRating, comment, tags, currentUserId) {
  return dispatch => {
    dispatch(editReviewModal(reference, locationId, locationName, locationType, locationAddress, starRating, comment, tags, currentUserId));
  };
}

// ****************************************
// Open question
// ****************************************
export function openQuestionModal(locationId, locationName, locationType, pageSize, pageNumber) {
	return {type: types.OPEN_QUESTION_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'QuestionModal', pageSize, pageNumber };
}

export function closeQuestionModal() {
	return {type: types.CLOSE_QUESTION_MODEL, name: 'QuestionModal'};
}

export function openQuestion(locationId, locationName, locationType, pageSize, pageNumber) {
	return dispatch => {
		dispatch(openQuestionModal(locationId, locationName, locationType, pageSize, pageNumber));
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

export function openQuestionAnswer(questionId, question, locationId, pageSize, pageNumber) {
	return dispatch => {
		dispatch(openQuestionAnswerModal(questionId, question, locationId, pageSize, pageNumber));
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
export function openBookmarkModal(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, parentLocationUrl, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, locationLength, removeBookmark, latitude, longitude) {
  return {type: types.OPEN_BOOKMARK_MODEL, parentLocationId: parentLocationId, parentLocationName: parentLocationName, parentLocationNameLong: parentLocationNameLong, parentLocationImage: parentLocationImage, parentLocationUrl: parentLocationUrl, locationId: locationId, locationName: locationName, locationType: locationType, locationNameLong: locationNameLong, locationUrl: locationUrl, locationImage: locationImage, locationLength: locationLength, removeBookmark: removeBookmark, latitude:latitude, longitude:longitude, name: 'BookmarkModal' };
}

export function closeBookmarkModal() {
	return {type: types.CLOSE_BOOKMARK_MODEL, name: 'BookmarkModal'};
}

export function openBookmark(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, parentLocationUrl, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, locationLength, removeBookmark, latitude, longitude) {
	return dispatch => {
		dispatch(openBookmarkModal(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, parentLocationUrl, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, locationLength, removeBookmark, latitude, longitude));
	};
}


// ****************************************
// Add Visit
// ****************************************
export function openVisitModal(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, removeBookmark, latitude, longitude) {
  return {type: types.OPEN_VISIT_MODEL, parentLocationId: parentLocationId, parentLocationName: parentLocationName, parentLocationNameLong: parentLocationNameLong, parentLocationImage: parentLocationImage, locationId: locationId, locationName: locationName, locationType: locationType, locationNameLong: locationNameLong, locationUrl: locationUrl, locationImage: locationImage, removeBookmark: removeBookmark, latitude:latitude, longitude:longitude, name: 'BookmarkModal' };
}

export function closeVisitModal() {
  return {type: types.CLOSE_VISIT_MODEL, name: 'VisitModal'};
}

export function openVisit(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, removeBookmark, latitude, longitude) {
  return dispatch => {
    dispatch(openVisitModal(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, removeBookmark, latitude, longitude));
  };
}

// ****************************************
// Add Bookmark
// ****************************************
export function openPhotoModal(locationId, locationName, locationNameLong, locationType) {
	return {type: types.OPEN_PHOTO_MODEL, locationId: locationId, locationName: locationName, locationNameLong: locationNameLong, locationType: locationType, name: 'PhotoModal' };
}

export function closePhotoModal() {
	return {type: types.CLOSE_PHOTO_MODEL, name: 'PhotoModal'};
}

export function openPhoto(locationId, locationName, locationNameLong, locationType) {
	return dispatch => {
		dispatch(openPhotoModal(locationId, locationName, locationNameLong, locationType));
	};
}



// ****************************************
// Open Map Sidebar
// ****************************************
export function openMapSideBarModal(longitude, latitude, text, zoom, markerArray, locationType) {
  return {type: types.OPEN_MAP_SIDEBAR_MODEL, longitude, latitude, text, zoom, markerArray, locationType, name: 'MapSidebarModal' };
}

export function closeMapSideBarModal() {
  return {type: types.CLOSE_MAP_SIDEBAR_MODEL, name: 'MapSidebarModal'};
}

export function openMapSideBar(longitude, latitude, text, zoom, markerArray, locationType) {
  return dispatch => {
    dispatch(openMapSideBarModal(longitude, latitude, text, zoom, markerArray, locationType));
  };
}


// ****************************************
// Open CategoryModel
// ****************************************
export function openCategoryModel(categories, selectedCategories) {
  return {type: types.OPEN_CATEGORY_MODEL, categories, selectedCategories, name: 'CategoryModal' };
}

export function closeCategoryModel() {
  return {type: types.CLOSE_CATEGORY_MODEL, name: 'CategoryModal'};
}

export function openCategory(categories, selectedCategories) {
  return dispatch => {
    dispatch(openCategoryModel(categories, selectedCategories));
  };
}

export function updateCategories(selectedCategories) {
  return dispatch => {
    dispatch({type: types.CHANGE_CATEGORY_MODEL, selectedCategories, name: 'ChangeCategories' });
  };
}
