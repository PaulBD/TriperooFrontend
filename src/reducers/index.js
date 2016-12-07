import { combineReducers } from 'redux';
import newsletterReducer from './newsletterReducer';
import searches from './searchReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  newsletterReducer,
  searches,
  routing: routerReducer
});

export default rootReducer;
