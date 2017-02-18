import initialState from './initialState';
import * as types from '../actionTypes/';

export default function newsletterReducer(state = initialState.newsletter, action) {


	switch(action.type) {
		case types.SAVE_NEWSLETTER_SUCCESS:
			return action.newsletter;
		default:
			return state;
	}
}
