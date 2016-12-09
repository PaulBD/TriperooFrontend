import { combineReducers } from 'redux';
import newsletterReducer from './newsletterReducer';
import searches from './searchReducer';
import features from './featureReducer';
import lastMinute from './lastMinuteReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  newsletterReducer,
  searches,
  features,
  lastMinute,
  routing: routerReducer
});

export default rootReducer;
