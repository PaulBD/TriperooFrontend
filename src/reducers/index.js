import { combineReducers } from 'redux';
import newsletterReducer from './newsletterReducer';
import search from './searchReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  newsletterReducer,
  search,
  routing: routerReducer
});

export default rootReducer;
