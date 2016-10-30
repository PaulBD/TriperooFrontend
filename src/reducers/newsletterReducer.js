import objectAssign from 'object-assign';
import initialState from './initialState';

export default function newsletterReducer(state = initialState.footerNewsletter, action) {

	console.log(action.type);


  return objectAssign({}, state, {dateModified: action.dateModified});
}
