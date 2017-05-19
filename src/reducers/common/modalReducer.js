import * as types from '../../actionTypes/';

export default function modalReducer(state = { isSending: false, hasPosted: false }, action) {

    switch(action.type) {
        case types.OPEN_REVIEW_MODEL:
            return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType }, modalName: action.Name, modalType: 'Review' });
        case types.CLOSE_REVIEW_MODEL:
            return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.Name, modalType: 'Review' });
        
        case types.OPEN_QUESTION_MODEL:
            return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType }, modalName: action.Name, modalType: 'Question' });
        case types.CLOSE_QUESTION_MODEL:
            return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.Name, modalType: 'Question' });
        case types.OPEN_QUESTION_ANSWER_MODEL:
            return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { questionId: action.questionId, question: action.question }, modalName: action.Name, modalType: 'QuestionAnswer' });
        case types.CLOSE_QUESTION_ANSWER_MODEL:
            return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.Name, modalType: 'QuestionAnswer' });
       
        case types.OPEN_LOGIN_MODEL:
            return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalName: action.Name, modalType: 'Login' });
        case types.CLOSE_LOGIN_MODEL:
            return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.Name, modalType: 'Login' });
        case types.OPEN_SIGNUP_MODEL:
            return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalName: action.Name, modalType: 'Signup' });
        case types.CLOSE_SIGNUP_MODEL:
            return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.Name, modalType: 'Signup' });
        
        case types.OPEN_BOOKMARK_MODEL:
            return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType }, modalName: action.Name, modalType: 'Bookmark' });
        case types.CLOSE_BOOKMARK_MODEL:
            return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.Name, modalType: 'Bookmark' });
        case types.OPEN_PHOTO_MODEL:
            return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType }, modalName: action.Name, modalType: 'Photo' });
        case types.CLOSE_PHOTO_MODEL:
            return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.Name, modalType: 'Photo' });
        
        case types.OPEN_LOCATION_MODEL:
            return Object.assign({}, state, { modalIsOpen: true, isSending: true, hasPosted: false, modalContent: { locationId: action.locationId, locationName: action.locationName, locationType: action.locationType }, modalName: action.Name, modalType: 'Location' });
        case types.CLOSE_LOCATION_MODEL:
            return Object.assign({}, state, { modalIsOpen: false, isSending: false, hasPosted: false, modalName: action.Name, modalType: 'Location' });
        
        default:
            return state;
    }
}
