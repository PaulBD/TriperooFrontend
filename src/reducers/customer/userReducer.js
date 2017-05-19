import * as types from '../../actionTypes/';

export default function userReducer(state = { isSending: false, hasPosted: false }, action) {
    switch(action.type) {
        case types.POST_BOOKMARK_REQUEST:
            return Object.assign({}, state, { isSending: true, hasPosted: false});
        case types.POST_BOOKMARK_SUCCESS:
            return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
        case types.POST_BOOKMARK_FAILURE:
            return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message }); 
        
        case types.POST_PHOTO_REQUEST:
            return Object.assign({}, state, { isSending: true, hasPosted: false});
        case types.POST_PHOTO_SUCCESS:
            return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
        case types.POST_PHOTO_FAILURE:
            return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message }); 
        
        default:
            return state;
    }
}