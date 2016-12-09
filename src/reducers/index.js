import { combineReducers } from 'redux';
import newsletter from './newsletterReducer';
import searches from './searchReducer';
import features from './featureReducer';
import hotDeals from './hotDealReducer';
import specialDeals from './specialDealReducer';
import trendingDeals from './trendingDealReducer';
import lastMinute from './lastMinuteReducer';
import comments from './commentReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  newsletter,
  searches,
  features,
  hotDeals,
  specialDeals,
  trendingDeals,
  lastMinute,
  comments,
  routing: routerReducer
});

export default rootReducer;
