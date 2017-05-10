import * as types from '../actionTypes/';

export default function globalReducer(state = { isSending: false, hasPosted: false }, action) {
    switch(action.type) {
        case types.OPEN_REVIEW_MODEL:
            return Object.assign({}, state, { isSending: true, hasPosted: false, locationId: action.locationId });
        default:
            return state;
    }
}
