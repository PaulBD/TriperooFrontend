import { combineReducers } from 'redux';
import authentication from './authenticationReducer';
import currency from './currencyReducer';
import newsletter from './newsletterReducer';
import autocomplete from './autocompleteReducer';
import header from './headerReducer';
import hotelDeals from './hotelDealsReducer';
import question from './questionReducer';
import questions from './questionsReducer';
import reviewList from './reviewsReducer';
import review from './reviewReducer';
import location from './locationReducer';
import locationsList from './locationsReducer';
import weather from './weatherReducer';
import locationEvents from './eventsReducer';
import flights from './flightsReducer';
import destinations from './destinationsReducer';
import airports from './airportsReducer';

import attractionDeals from './legacy/attractionDealReducer';
import hotDeals from './legacy/hotDealReducer';
import lastMinute from './legacy/lastMinuteReducer';
import places from './legacy/placeListReducer';
import place from './legacy/placeReducer';
import restaurantDeals from './legacy/restaurantDealReducer';
import specialDeals from './legacy/specialDealReducer';
import trendingDeals from './legacy/trendingDealReducer';
import airportParking from './airportParkingReducer';
import airportHotel from './airportHotelReducer';

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
  reviewList,
  review,
  location,
  locationsList,
  places,
  place,
  weather,
  destinations,
  locationEvents,
  flights,
  airportParking,
  airportHotel,
  airports,
  routing: routerReducer
});

export default rootReducer;
