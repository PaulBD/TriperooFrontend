import { combineReducers } from 'redux';
import newsletter from './newsletterReducer';
import searches from './searchReducer';
import features from './featureReducer';
import hotDeals from './hotDealReducer';
import specialDeals from './specialDealReducer';
import trendingDeals from './trendingDealReducer';
import restaurantDeals from './restaurantDealReducer';
import attractionDeals from './attractionDealReducer';
import hotelDeals from './hotelDealReducer';
import lastMinute from './lastMinuteReducer';
import questions from './questionReducer';
import reviews from './reviewReducer';
import area from './areaReducer';
import places from './placeListReducer';
import placeDetail from './placeDetailReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  newsletter,
  searches,
  features,
  hotDeals,
  specialDeals,
  trendingDeals,
  restaurantDeals,
  attractionDeals,
  hotelDeals,
  lastMinute,
  questions,
  reviews,
  area,
  places,
  placeDetail,
  routing: routerReducer
});

export default rootReducer;
