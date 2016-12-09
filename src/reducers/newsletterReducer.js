import initialState from './initialState';
import * as types from '../actionTypes/';

export default function newsletterReducer(state = [], action) {
	switch(action.type) {
		case types.LOAD_NEWSLETTER_SUCCESS:
			return action.newsletter;
		default:
			return state;
	}
}
