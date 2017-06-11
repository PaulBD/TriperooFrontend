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

import LocationEvents from './apps/location/events';
import LocationHome from './apps/location';
import LocationDetail from './apps/location/detail';
import LocationRestaurants from './apps/location/restaurants';
import LocationNightlife from './apps/location/nightlife';
import LocationReviews from './apps/location/reviews';
import LocationAttractions from './apps/location/attractions';
import LocationHotels from './apps/location/hotels';

import Holidays from './apps/holiday';
import Flights from './apps/flight';
import FlightSearchResults from './apps/flight/searchResults';
import TravelExtras from './apps/travelExtras';
import AirportParking from './apps/travelExtras/airportParking';
import AirportHotels from './apps/travelExtras/airportHotels';
import AirportTransfers from './apps/travelExtras/airportTransfers';
import AirportLounges from './apps/travelExtras/airportLounges';
import CarHire from './apps/travelExtras/carHire';
import Cottages from './apps/travelExtras/cottages';
import Cruises from './apps/travelExtras/cruises';
import RailTravel from './apps/travelExtras/railTravel';
import Villas from './apps/travelExtras/villas';


import CustomerHome from './apps/customer';
import CustomerProfile from './apps/customer/updateProfile';
import CustomerPhotos from './apps/customer/photos';
import BookingHistory from './apps/customer/bookingHistory';
import CustomerReviews from './apps/customer/reviews';
import CustomerTrips from './apps/customer/trips';
import CustomerTripDetail from './apps/customer/tripDetail';

// Hotels
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
    <Route path="/(:placeId)/visit-location/(:placeName)" component={LocationDetail}/>
    <Route path="/(:placeId)/visit/(:placeName)/events" component={LocationEvents}/>
    <Route path="/(:placeId)/visit/(:placeName)/reviews" component={LocationReviews}/>
    <Route path="/(:placeId)/visit/(:placeName)/attractions" component={LocationAttractions}/>
    <Route path="/(:placeId)/visit/(:placeName)/restaurants" component={LocationRestaurants}/>
    <Route path="/(:placeId)/visit/(:placeName)/nightlife" component={LocationNightlife}/>
    <Route path="/(:placeId)/visit/(:placeName)/hotels" component={LocationHotels}/>


    <Route path="/holidays" component={Holidays}/>
    <Route path="/hotels" component={Hotels}/>
    <Route path="/hotels/search-results" component={HotelSearchResults}/>
    <Route path="/flights" component={Flights}/>
    <Route path="/flights/results" component={FlightSearchResults} />

    <Route path="/travel-extras" component={TravelExtras}/>
    <Route path="/travel-extras/airport-parking" component={AirportParking}/>
    <Route path="/travel-extras/airport-hotels" component={AirportHotels}/>
    <Route path="/travel-extras/airport-lounges" component={AirportLounges}/>
    <Route path="/travel-extras/airport-transfers" component={AirportTransfers}/>
    <Route path="/travel-extras/car-hire" component={CarHire}/>
    <Route path="/travel-extras/cottages" component={Cottages}/>
    <Route path="/travel-extras/cruises" component={Cruises}/>
    <Route path="/travel-extras/rail-travel" component={RailTravel}/>
    <Route path="/travel-extras/villas" component={Villas}/>

    <Route path="/profile/(:guid)/(:customerName)" component={CustomerHome}/>
    <Route path="/profile/(:guid)/(:customerName)/profile" component={CustomerProfile}/>
    <Route path="/profile/(:guid)/(:customerName)/photos" component={CustomerPhotos}/>
    <Route path="/profile/(:guid)/(:customerName)/booking-history" component={BookingHistory}/>
    <Route path="/profile/(:guid)/(:customerName)/reviews" component={CustomerReviews}/>
    <Route path="/profile/(:guid)/(:customerName)/trips" component={CustomerTrips}/>
    <Route path="/profile/(:guid)/(:customerName)/trips/(:tripId)/(:tripName)" component={CustomerTripDetail}/>

    <Route path="*" component={NotFoundPage}/>
  </Route>
);
