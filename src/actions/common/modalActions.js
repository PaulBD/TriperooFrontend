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
    dispatch(closeCancelHotelModal());
    dispatch(closeRestaurantModel());
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
export function openReviewModal(locationId, locationName, locationType, pageSize, pageNumber, currentUserId) {
	return {type: types.OPEN_REVIEW_MODEL, locationId: locationId, locationName: locationName, locationType: locationType, name: 'ReviewModal', pageSize, pageNumber, currentUserId};
}

export function closeReviewModal() {
	return {type: types.CLOSE_REVIEW_MODEL, name: 'ReviewModal'};
}

export function openReview(locationId, locationName, locationType, pageSize, pageNumber, currentUserId) {
	return dispatch => {
		dispatch(openReviewModal(locationId, locationName, locationType, pageSize, pageNumber, currentUserId));
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
export function openQuestionModal(locationId, parentLocationId, locationName, locationType, pageSize, pageNumber) {
	return {type: types.OPEN_QUESTION_MODEL, locationId: locationId, parentLocationId: parentLocationId, locationName: locationName, locationType: locationType, name: 'QuestionModal', pageSize, pageNumber };
}

export function closeQuestionModal() {
	return {type: types.CLOSE_QUESTION_MODEL, name: 'QuestionModal'};
}

export function openQuestion(locationId, parentLocationId, locationName, locationType, pageSize, pageNumber) {
	return dispatch => {
		dispatch(openQuestionModal(locationId, parentLocationId, locationName, locationType, pageSize, pageNumber));
	};
}

// ****************************************
// Open question answer
// ****************************************
export function openQuestionAnswerModal(questionReference, question, locationId, parentLocationId, pageSize, pageNumber) {
	return {type: types.OPEN_QUESTION_ANSWER_MODEL, question: question, questionReference: questionReference, name: 'QuestionAnswerModal', locationId, parentLocationId, pageSize, pageNumber };
}

export function closeQuestionAnswerModal() {
	return {type: types.CLOSE_QUESTION_ANSWER_MODEL, name: 'QuestionAnswerModal'};
}

export function openQuestionAnswer(questionId, question, locationId, parentLocationId, pageSize, pageNumber) {
	return dispatch => {
		dispatch(openQuestionAnswerModal(questionId, question, locationId, parentLocationId, pageSize, pageNumber));
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
export function openBookmarkModal(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, parentLocationUrl, parentLocationType, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, locationLength, removeBookmark, latitude, longitude, price, duration, bookingUrl) {
  return {type: types.OPEN_BOOKMARK_MODEL, parentLocationId: parentLocationId, parentLocationName: parentLocationName, parentLocationNameLong: parentLocationNameLong, parentLocationImage: parentLocationImage, parentLocationUrl: parentLocationUrl, parentLocationType: parentLocationType, locationId: locationId, locationName: locationName, locationType: locationType, locationNameLong: locationNameLong, locationUrl: locationUrl, locationImage: locationImage, locationLength: locationLength, removeBookmark: removeBookmark, latitude:latitude, longitude:longitude, price:price, duration:duration, bookingUrl:bookingUrl, name: 'BookmarkModal' };
}

export function closeBookmarkModal() {
	return {type: types.CLOSE_BOOKMARK_MODEL, name: 'BookmarkModal'};
}

export function openBookmark(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, parentLocationUrl, parentLocationType, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, locationLength, removeBookmark, latitude, longitude, price, duration, bookingUrl) {
	return dispatch => {
		dispatch(openBookmarkModal(parentLocationId, parentLocationName, parentLocationNameLong, parentLocationImage, parentLocationUrl, parentLocationType, locationId, locationNameLong, locationName, locationType, locationImage, locationUrl, locationLength, removeBookmark, latitude, longitude, price, duration, bookingUrl));
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
export function openCategoryModel(categories, selectedCategories, contentType, locationId, searchName, pageSize, pageNumber) {
  return {type: types.OPEN_CATEGORY_MODEL, categories, selectedCategories, contentType, locationId, searchName, pageSize, pageNumber, name: 'CategoryModal' };
}

export function closeCategoryModel() {
  return {type: types.CLOSE_CATEGORY_MODEL, name: 'CategoryModal'};
}

export function openCategory(categories, selectedCategories, contentType, locationId, searchName, pageSize, pageNumber) {
  return dispatch => {
    dispatch(openCategoryModel(categories, selectedCategories, contentType, locationId, searchName, pageSize, pageNumber));
  };
}

export function updateCategories(selectedCategories) {
  return dispatch => {
    dispatch({type: types.CHANGE_CATEGORY_MODEL, selectedCategories, name: 'ChangeCategories' });
  };
}


// ****************************************
// Open Cancel Hotel Model
// ****************************************
export function openCancelHotelModel(hotelName, itineryId, confirmationId) {
  return {type: types.OPEN_CANCEL_HOTEL_MODEL, hotelName, itineryId, confirmationId, name: 'CancelHotelModal' };
}

export function closeCancelHotelModal() {
  return {type: types.CLOSE_CANCEL_HOTEL_MODEL, name: 'CancelHotelModal'};
}

export function openCancelHotel(hotelName, itineryId, confirmationId) {
  return dispatch => {
    dispatch(openCancelHotelModel(hotelName, itineryId, confirmationId));
  };
}

// ****************************************
// Open Facebook Modal
// ****************************************
export function openFacebookModel(facebookResponse) {
  return {type: types.OPEN_FACEBOOK_MODEL, facebookResponse, name: 'FacebookModal' };
}

export function closeFacebookModel() {
  return {type: types.CLOSE_FACEBOOK_MODEL, name: 'FacebookModal'};
}

export function openFacebook(facebookResponse) {
  return dispatch => {
    dispatch(openFacebookModel(facebookResponse));
  };
}


// ****************************************
// Open Restaurant Modal
// ****************************************
export function openRestaurantModel(locationId) {
  return {type: types.OPEN_RESTAURANT_MODEL, locationId, name: 'RestaurantModal' };
}

export function closeRestaurantModel() {
  return {type: types.CLOSE_RESTAURANT_MODEL, name: 'RestaurantModal'};
}

export function openRestaurant(locationId) {
  return dispatch => {
    dispatch(openRestaurantModel(locationId));
  };
}
