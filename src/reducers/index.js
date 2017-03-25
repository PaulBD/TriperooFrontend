import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import currency from './currencyReducer';
import newsletter from './newsletterReducer';
import autocomplete from './autocompleteReducer';
import header from './headerReducer';
import hotDeals from './legacy/hotDealReducer';
import specialDeals from './specialDealReducer';
import trendingDeals from './trendingDealReducer';
import restaurantDeals from './restaurantDealReducer';
import attractionDeals from './legacy/attractionDealReducer';
import hotelDeals from './hotelDealsReducer';
import lastMinute from './lastMinuteReducer';
import question from './questionReducer';
import questions from './questionsReducer';
import reviews from './reviewsReducer';
import review from './reviewReducer';
import location from './locationReducer';
import locationsList from './locationsReducer';
import places from './placeListReducer';
import place from './placeReducer';
import weather from './weatherReducer';
import locationEvents from './eventsReducer';
import destinations from './destinationsReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  authentication,
  currency,
  newsletter,
  autocomplete,
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
  locationsList,
  places,
  place,
  weather,
  destinations,
  locationEvents,
  routing: routerReducer
});

export default rootReducer;
