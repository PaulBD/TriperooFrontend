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
import question from './questionReducer';
import questions from './questionsReducer';
import reviews from './reviewsReducer';
import review from './reviewReducer';
import location from './locationReducer';
import locations from './locationsReducer';
import places from './placeListReducer';
import place from './placeReducer';
import weather from './weatherReducer';
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
  question,
  questions,
  reviews,
  review,
  location,
  locations,
  places,
  place,
  weather,
  destinations,
  routing: routerReducer
});

export default rootReducer;
