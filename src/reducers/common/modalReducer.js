import * as types from '../../actionTypes/';

export default function modalReducer(state = { isSending: false, hasPosted: false }, action) {

  switch(action.type) {
    case types.EDIT_REVIEW_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationType: action.locationType, reference: action.reference, locationName: action.locationName, locationAddress: action.locationAddress, starRating: action.starRating, comment: action.comment, tags: action.tags, currentUserId: action.currentUserId }, modalName: action.name, modalType: 'EditReview' });
    case types.CLOSE_EDIT_REVIEW_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'EditReview' });


    case types.OPEN_REVIEW_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType, pageSize: action.pageSize, pageNumber: action.pageNumber }, modalName: action.name, modalType: 'Review' });
    case types.CLOSE_REVIEW_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Review' });

    case types.OPEN_QUESTION_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType, pageSize: action.pageSize, pageNumber: action.pageNumber }, modalName: action.name, modalType: 'Question' });
    case types.CLOSE_QUESTION_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Question' });

    case types.OPEN_QUESTION_ANSWER_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { questionReference: action.questionReference, question: action.question, locationId: action.locationId, pageSize: action.pageSize, pageNumber: action.pageNumber }, modalName: action.name, modalType: 'QuestionAnswer' });
    case types.CLOSE_QUESTION_ANSWER_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'QuestionAnswer' });

    case types.OPEN_LOGIN_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalName: action.name, modalType: 'Login' });
    case types.CLOSE_LOGIN_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Login' });
    case types.OPEN_SIGNUP_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalName: action.name, modalType: 'Signup' });
    case types.CLOSE_SIGNUP_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Signup' });

    case types.OPEN_BOOKMARK_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { parentLocationId: action.parentLocationId, parentLocationName: action.parentLocationName, parentLocationNameLong: action.parentLocationNameLong, parentLocationType: action.parentLocationType, parentLocationImage: action.parentLocationImage, parentLocationUrl: action.parentLocationUrl, locationId: action.locationId, locationUrl: action.locationUrl, locationImage: action.locationImage, locationNameLong: action.locationNameLong, locationName: action.locationName, locationType: action.locationType, locationLength: action.locationLength, removeBookmark: action.removeBookmark, latitude: action.latitude , longitude: action.longitude, price: action.price, duration:action.duration, bookingUrl:action.bookingUrl }, modalName: action.name, modalType: 'Bookmark' });
    case types.CLOSE_BOOKMARK_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Bookmark' });

    case types.OPEN_VISIT_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { parentLocationId: action.parentLocationId, parentLocationName: action.parentLocationName, parentLocationNameLong: action.parentLocationNameLong, parentLocationImage: action.parentLocationImage, locationId: action.locationId, locationUrl: action.locationUrl, locationImage: action.locationImage, locationNameLong: action.locationNameLong, locationName: action.locationName, locationType: action.locationType, removeBookmark: action.removeBookmark, latitude: action.latitude , longitude: action.longitude }, modalName: action.name, modalType: 'Visit' });
    case types.CLOSE_VISIT_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Visit' });

    case types.OPEN_PHOTO_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationNameLong: action.locationNameLong, locationType: action.locationType }, modalName: action.name, modalType: 'Photo' });
    case types.CLOSE_PHOTO_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Photo' });

    case types.OPEN_LOCATION_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType, location: action.location }, modalName: action.name, modalType: 'Location' });
    case types.CLOSE_LOCATION_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Location' });

    case types.OPEN_LOCATION_IMAGE_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { imageList: action.imageList, imagePosition: action.imagePosition }, modalName: action.name, modalType: 'LocationImage' });
    case types.CLOSE_LOCATION_IMAGE_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'LocationImage' });

    case types.OPEN_HOTEL_IMAGE_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { imageList: action.imageList, imagePosition: action.imagePosition, hotelName: action.hotelName }, modalName: action.name, modalType: 'HotelImage' });
    case types.CLOSE_HOTEL_IMAGE_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'HotelImage' });

    case types.OPEN_POLICY_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { policy: action.policy }, modalName: action.name, modalType: 'CancellationPolicy' });
    case types.CLOSE_POLICY_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'CancellationPolicy' });

    case types.OPEN_MAP_SIDEBAR_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { longitude: action.longitude, latitude: action.latitude, text: action.text, zoom: action.zoom, markerArray: action.markerArray, locationType: action.locationType }, modalName: action.name, modalType: 'MapSidebarModal' });
    case types.CLOSE_MAP_SIDEBAR_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'MapSidebarModal' });

    case types.OPEN_CATEGORY_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { categories: action.categories, selectedCategories: action.selectedCategories, contentType: action.contentType, searchName: action.searchName, locationId: action.locationId, pageSize: action.pageSize, pageNumber: action.pageNumber }, modalName: action.name, modalType: 'CategoryModal' });
    case types.CLOSE_CATEGORY_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'CategoryModal' });
    case types.CHANGE_CATEGORY_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { selectedCategories: action.selectedCategories }, modalName: action.name, modalType: 'ChangeCategories' });

    case types.OPEN_FACEBOOK_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { facebookResponse: action.facebookResponse }, modalName: action.name, modalType: 'FacebookModal' });
    case types.CLOSE_FACEBOOK_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'FacebookModal' });


    default:
      return state;
  }
}
