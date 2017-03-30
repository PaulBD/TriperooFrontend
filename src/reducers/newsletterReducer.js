import * as types from '../actionTypes/';

export default function newsletterReducer(state = { hasSaved: false, newsletter: {}, errorMessage: '' }, action) {
	switch(action.type) {
		case types.NEWSLETTER_REQUEST:
			return Object.assign({}, state, { hasSaved: false });
		case types.NEWSLETTER_SUCCESS:
			return Object.assign({}, state, { newsletter: action.newsletter, hasSaved: true });
		case types.NEWSLETTER_FAILURE:
			return Object.assign({}, state, { hasSaved: false, errorMessage: action.errorMessage });
		default:
			return state;
	}
}
