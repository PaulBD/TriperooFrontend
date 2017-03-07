import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import currency from './currencyReducer';
import newsletter from './newsletterReducer';
import searches from './searchReducer';
import header from './headerReducer';
import hotDeals from './hotDealReducer';
import specialDeals from './specialDealReducer';
import trendingDeals from './trendingDealReducer';
import restaurantDeals from './restaurantDealReducer';
import attractionDeals from './attractionDealReducer';
import hotelDeals from './hotelDealReducer';
import lastMinute from './lastMinuteReducer';
import questions from './questionReducer';
import reviews from './reviewsReducer';
import review from './reviewReducer';
import area from './areaReducer';
import places from './placeListReducer';
import place from './placeReducer';
import destinations from './topDestinationsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  authentication,
  currency,
  newsletter,
  searches,
  header,
  hotDeals,
  specialDeals,
  trendingDeals,
  restaurantDeals,
  attractionDeals,
  hotelDeals,
  lastMinute,
  questions,
  reviews,
  review,
  area,
  places,
  place,
  destinations,
  routing: routerReducer
});

export default rootReducer;
