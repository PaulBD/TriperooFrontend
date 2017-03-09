import initialState from './initialState';
import * as types from '../actionTypes/';

export default function newsletterReducer(state = { hasSaved: false, newsletter: {}, errorMessage: '' }, action) {
	switch(action.type) {
		case types.SAVE_NEWSLETTER_SUCCESS:
			return Object.assign({}, state, { newsletter: action.newsletter, hasSaved: true });
		case types.SAVE_NEWSLETTER_ERROR:
			return Object.assign({}, state, { hasSaved: false, errorMessage: action.errorMessage });
		default:
			return state;
	}
}
