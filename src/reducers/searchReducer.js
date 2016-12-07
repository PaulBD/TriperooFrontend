import initialState from './initialState';

export default function searchReducer(state = initialState.searches, action) {
	switch(action.type) {
		case 'LOAD_SEARCH_SUCCESS':
			return action.searches;
		case 'CLEAR_SEARCHES':
			return action.searches;
		default:
			return state;
	}
}
