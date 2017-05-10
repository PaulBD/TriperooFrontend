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
import global from './reviewReducer';
import location from './locationReducer';
import locationsList from './locationsReducer';
import attractionsList from './attractionsReducer';
import restaurantsList from './restaurantsReducer';
import nightlifeList from './nightlifeReducer';
import weather from './weatherReducer';
import locationEvents from './eventsReducer';
import categoryList from './categoryReducer';
import flights from './flightsReducer';
import destinations from './destinationsReducer';
import airports from './airportsReducer';

import airportParking from './airportParkingReducer';
import airportHotel from './airportHotelReducer';
import airportLounge from './airportLoungeReducer';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  authentication,
  currency,
  newsletter,
  autocomplete,
  header,
  hotelDeals,
  question,
  questions,
  reviewList,
  review,
  global,
  location,
  locationsList,
  attractionsList,
  restaurantsList,
  nightlifeList,
  categoryList,
  weather,
  destinations,
  locationEvents,
  flights,
  airportParking,
  airportHotel,
  airportLounge,
  airports,
  routing: routerReducer
});

export default rootReducer;
