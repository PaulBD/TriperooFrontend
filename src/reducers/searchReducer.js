export default function searchReducer(state = [], action) {
	switch(action.type) {
		case 'SEARCH_HOMEPAGE':
			return [...state,
				Object.assign({}, action.list)
			];
		default:
			return state;
	}
}
