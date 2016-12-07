import objectAssign from 'object-assign';
import initialState from './initialState';

export default function newsletterReducer(state = initialState.footerNewsletter, action) {

  return objectAssign({}, state, {dateModified: action.dateModified});
}
