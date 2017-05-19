import * as types from '../../actionTypes/';

export default function questionReducer(state = { isSending: false, hasPosted: false }, action) {
    switch(action.type) {
        case types.POST_QUESTION_REQUEST:
            return Object.assign({}, state, { isSending: true, hasPosted: false, question: action.question });
        case types.POST_QUESTION_SUCCESS:
            return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
        case types.POST_QUESTION_FAILURE:
            return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message }); 
        
        case types.POST_ANSWER_REQUEST:
            return Object.assign({}, state, { isSending: true, hasPosted: false, answer: action.answer });
        case types.POST_ANSWER_SUCCESS:
            return Object.assign({}, state, { isSending: false, hasPosted: true, errorMessage: '' });
        case types.POST_ANSWER_FAILURE:
            return Object.assign({}, state, { isSending: false, hasPosted: false, errorMessage: action.message }); 
        
        case types.CLEAR_QUESTION:
            return Object.assign({}, state, { isSending: false, hasPosted: false, question: '' });
        default:
            return state;
    }
}