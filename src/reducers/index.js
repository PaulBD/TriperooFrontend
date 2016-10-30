import { combineReducers } from 'redux';
import newsletterReducer from './newsletterReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  newsletterReducer,
  routing: routerReducer
});

export default rootReducer;
