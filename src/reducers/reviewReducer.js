import initialState from './initialState';
import * as types from '../actionTypes/';

export default function reviewReducer(state = { isSending: false, hasPosted: false }, action) {
    switch(action.type) {
        case types.REVIEW_REQUEST:
            return Object.assign({}, state, { isSending: true, hasPosted: false, review: action.review });
        case types.POST_REVIEW_SUCCESS:
            return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
        case types.POST_REVIEW_FAILURE:
            return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message }); 
        case types.CLEAR_REVIEW:
            return Object.assign({}, state, { isSending: false, hasPosted: false, review: '' });
        default:
            return state;
    }
}
