import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Container from './apps';
import HomePage from './apps/homePage';
import DestinationPage from './apps/destinations';
import AboutPage from './apps/info/aboutPage';
import TermsPage from './apps/info/termsPage';
import PrivacyPage from './apps/info/privacyPage';
import NotFoundPage from './apps/notFoundPage';
import CityPage from './apps/city';
import AttractionPage from './apps/attraction';
import RestaurantPage from './apps/restaurant';
import PubPage from './apps/pub';
import ReviewPage from './apps/review';
import HotelPage from './apps/hotel';
import Holidays from './apps/holiday';
import Hotels from './apps/hotel/search-hotels';
import Flights from './apps/flight';
import TravelExtras from './apps/travelExtras';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={HomePage}/>
    <Route path="/explore-destinations" component={DestinationPage}/>
    <Route path="/about-us" component={AboutPage}/>
    <Route path="/terms" component={TermsPage}/>
    <Route path="/privacy-policy" component={PrivacyPage}/>
    <Route path="/city" component={CityPage}/>
    <Route path="/city/attractions" component={AttractionPage}/>
    <Route path="/city/hotels" component={HotelPage}/>
    <Route path="/city/restaurants" component={RestaurantPage}/>
    <Route path="/city/pubs" component={PubPage}/>
    <Route path="/city/reviews" component={ReviewPage}/>
    <Route path="/holidays" component={Holidays}/>
    <Route path="/hotels" component={Hotels}/>
    <Route path="/flights" component={Flights}/>
    <Route path="/travel-extras" component={TravelExtras}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
