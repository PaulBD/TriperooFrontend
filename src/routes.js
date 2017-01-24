import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Container from './apps';
import HomePage from './apps/homePage';
import DestinationPage from './apps/destinations';
import AboutPage from './apps/info/aboutPage';
import TermsPage from './apps/info/termsPage';
import PrivacyPage from './apps/info/privacyPage';
import NotFoundPage from './apps/notFoundPage';

import PlaceHome from './apps/place';
import PlaceSearch from './apps/place/search';
import PlaceDetail from './apps/place/detail';

import Holidays from './apps/holiday';
import Flights from './apps/flight';
import TravelExtras from './apps/travelExtras';
import CarHire from './apps/travelExtras/car-hire';


import Hotels from './apps/hotel';
import HotelSearchResults from './apps/hotel/search-results';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={HomePage}/>
    <Route path="/explore-destinations" component={DestinationPage}/>
    <Route path="/about-us" component={AboutPage}/>
    <Route path="/terms" component={TermsPage}/>
    <Route path="/privacy-policy" component={PrivacyPage}/>

    <Route path="/places/(:countryId)/(:country)" component={PlaceHome}/>
    <Route path="/places/(:cityId)/(:country)/(:city)" component={PlaceHome}/>
    <Route path="/places/(:cityId)/(:country)/(:city)/(:type)" component={PlaceSearch}/>
    <Route path="/places/(:cityId)/(:country)/(:city)/(:type)/(:placeId)/(:placeName)" component={PlaceDetail}/>
    
    <Route path="/holidays" component={Holidays}/>
    <Route path="/hotels" component={Hotels}/>
    <Route path="/hotels/search-results" component={HotelSearchResults}/>
    <Route path="/flights" component={Flights}/>
    <Route path="/travel-extras" component={TravelExtras}/>
    <Route path="/travel-extras/car-hire" component={CarHire}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
