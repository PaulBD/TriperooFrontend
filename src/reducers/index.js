import { combineReducers } from 'redux';

import currency from './common/currencyReducer';
import content from './common/contentReducer';
import eventCategory from './common/eventCategoryReducer';
import modal from './common/modalReducer';

import authentication from './customer/authenticationReducer';
import newsletter from './customer/newsletterReducer';
import question from './customer/questionReducer';
import review from './customer/reviewReducer';
import user from './customer/userReducer';
import userFollow from './customer/userFollowReducer';
import photo from './customer/photoReducer';
import reservation from './customer/reservationReducer';

import articles from './location/articleReducer';
import airports from './location/airportReducer';
import pointOfInterests from './location/pointofinterestsReducer';
import attractions from './location/attractionsReducer';
import locationEvents from './location/eventReducer';
import flights from './location/flightReducer';
import deals from './location/dealReducer';
import hotels from './location/hotelReducer';
import locationQuestions from './location/locationQuestionsReducer';
import location from './location/locationReducer';
import cms from './location/cmsReducer';
import locationReviews from './location/locationReviewsReducer';
import locations from './location/locationsReducer';
import nightlife from './location/nightlifeReducer';
import restaurants from './location/restaurantReducer';
import weather from './location/weatherReducer';

import airportParking from './travelExtras/airportParkingReducer';
import airportHotel from './travelExtras/airportHotelReducer';
import airportLounge from './travelExtras/airportLoungeReducer';
import { localeReducer } from 'react-localize-redux';

import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({

  currency,
  content,
  eventCategory,
  modal,

  authentication,
  question,
  newsletter,
  review,
  user,
  userFollow,
  photo,
  reservation,

  articles,
  airports,
  pointOfInterests,
  attractions,
  cms,
  locationEvents,
  flights,
  deals,
  hotels,
  locationQuestions,
  location,
  locationReviews,
  locations,
  restaurants,
  nightlife,
  weather,

  airportParking,
  airportHotel,
  airportLounge,
  locale: localeReducer,
  routing: routerReducer
});

export default rootReducer;
