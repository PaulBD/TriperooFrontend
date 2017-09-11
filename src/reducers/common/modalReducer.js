import * as types from '../../actionTypes/';

export default function modalReducer(state = { isSending: false, hasPosted: false }, action) {

  switch(action.type) {
    case types.EDIT_REVIEW_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationType: action.locationType, reference: action.reference, locationName: action.locationName, locationAddress: action.locationAddress, starRating: action.starRating, comment: action.comment, tags: action.tags }, modalName: action.name, modalType: 'EditReview' });
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
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { parentLocationId: action.parentLocationId, parentLocationName: action.parentLocationName, parentLocationNameLong: action.parentLocationNameLong, locationId: action.locationId, locationUrl: action.locationUrl, locationImage: action.locationImage, locationNameLong: action.locationNameLong, locationName: action.locationName, locationType: action.locationType, removeBookmark: action.removeBookmark }, modalName: action.name, modalType: 'Bookmark' });
    case types.CLOSE_BOOKMARK_MODEL:
      return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.name, modalType: 'Bookmark' });

    case types.OPEN_PHOTO_MODEL:
      return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType }, modalName: action.name, modalType: 'Photo' });
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

    default:
      return state;
  }
}
