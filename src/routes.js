import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Container from './apps';
import HomePage from './apps/homePage';
import DestinationPage from './apps/destinations';
import AboutPage from './apps/info/aboutPage';
import TermsPage from './apps/info/termsPage';
import PrivacyPage from './apps/info/privacyPage';
import ContactPage from './apps/info/contactPage';
import FAQsPage from './apps/info/faqsPage';
import LocalExpertPage from './apps/info/localExpertPage';
import SupportPage from './apps/info/supportPage';
import NotFoundPage from './apps/notFoundPage';
import EventHome from './apps/events';

import LocationHome from './apps/location';
import PlaceSearch from './apps/place/search';
import Place from './apps/place/detail';

import Holidays from './apps/holiday';
import Flights from './apps/flight';
import TravelExtras from './apps/travelExtras';
import CarHire from './apps/travelExtras/car-hire';


import CustomerProfile from './apps/customer/updateProfile';
import CustomerPhotos from './apps/customer/photos';
import BookingHistory from './apps/customer/bookingHistory';


import Hotels from './apps/hotel';
import HotelSearchResults from './apps/hotel/search-results';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={HomePage}/>
    <Route path="/explore-destinations" component={DestinationPage}/>
    <Route path="/about-us" component={AboutPage}/>
    <Route path="/terms" component={TermsPage}/>
    <Route path="/privacy-policy" component={PrivacyPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route path="/faqs" component={FAQsPage}/>
    <Route path="/become-a-triperoo-agent" component={LocalExpertPage}/>
    <Route path="/support" component={SupportPage}/>

    <Route path="/(:placeId)/visit/(:placeName)" component={LocationHome}/>
    <Route path="/(:placeId)/visit/(:placeName)/all-events-this-week" component={EventHome}/>
    <Route path="/place/(:cityId)/(:country)/(:city)" component={LocationHome}/>
    <Route path="/place/(:cityId)/(:country)/(:city)/(:type)" component={PlaceSearch}/>
    <Route path="/place/(:cityId)/(:country)/(:city)/(:type)/(:placeId)/(:placeName)" component={Place}/>
    
    <Route path="/holidays" component={Holidays}/>
    <Route path="/hotels" component={Hotels}/>
    <Route path="/hotels/search-results" component={HotelSearchResults}/>
    <Route path="/flights" component={Flights}/>
    <Route path="/travel-extras" component={TravelExtras}/>
    <Route path="/customer/profile" component={CustomerProfile}/>
    <Route path="/customer/photos" component={CustomerPhotos}/>
    <Route path="/customer/booking-history" component={BookingHistory}/>


    <Route path="/travel-extras/car-hire" component={CarHire}/>

    <Route path="*" component={NotFoundPage}/>
  </Route>
);
