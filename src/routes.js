import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Container from './apps';
import HomePage from './apps/homePage';
import WelcomePage from './apps/homePage/welcome';
import DestinationPage from './apps/destinations';
import AboutPage from './apps/info/aboutPage';
import TermsPage from './apps/info/termsPage';
import PrivacyPage from './apps/info/privacyPage';
import CommunityPage from './apps/info/communityPage';
import ContactPage from './apps/info/contactPage';
import FAQsPage from './apps/info/faqsPage';
import LocalExpertPage from './apps/info/localExpertPage';
import SupportPage from './apps/info/supportPage';
import NotFoundPage from './apps/notFoundPage';

import LocationEvents from './apps/location/events';
import LocationHome from './apps/location';
import LocationDetail from './apps/location/detail';
import LocationEdit from './apps/location/addLocation';
import LocationDetailEdit from './apps/location/editLocation';
import LocationRestaurants from './apps/location/restaurants';
import LocationNightlife from './apps/location/nightlife';
import LocationReviews from './apps/location/reviews';
import LocationQuestions from './apps/location/questions';
import LocationQuestionDetail from './apps/location/questionDetail';
import LocationPointsOfInterest from './apps/location/pointofinterest';
import LocationAttractions from './apps/location/attractions';
import LocationHotels from './apps/location/hotels';

import Holidays from './apps/holiday';
import Flights from './apps/flight';
import FlightSearchResults from './apps/flight/search-results';
import TravelExtras from './apps/travelExtras';
import AirportParking from './apps/travelExtras/airportParking';
import AirportHotels from './apps/travelExtras/airportHotels';
import AirportLounges from './apps/travelExtras/airportLounges';


import CustomerHome from './apps/customer';
import ForgotPassword from './apps/customer/forgotPassword';
import CustomerProfile from './apps/customer/updateProfile';
import CustomerPhotos from './apps/customer/photos';
import Bookings from './apps/customer/bookings';
import CustomerReviews from './apps/customer/reviews';
import CustomerTrips from './apps/customer/trips';
import CustomerTripDetail from './apps/customer/tripDetail';
import CustomerFollowers from './apps/customer/followers';
import CustomerFollowing from './apps/customer/following';

// Articles
import LondonArticle from './apps/location/travelguides/united-kingdom/london';
import NewYorkArticle from './apps/location/travelguides/united-states/new-york';

// Hotels
import Hotels from './apps/hotel';
import HotelSearchResults from './apps/hotel/search-results';
import HotelCheckout from './apps/hotel/reservations';
import HotelDetail from './apps/hotel/detail';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={HomePage}/>
    <Route path="/welcome" component={WelcomePage}/>
    <Route path="/explore-destinations" component={DestinationPage}/>
    <Route path="/about-us" component={AboutPage}/>
    <Route path="/terms-of-use" component={TermsPage}/>
    <Route path="/community-guidelines" component={CommunityPage}/>
    <Route path="/privacy-policy" component={PrivacyPage}/>
    <Route path="/contact" component={ContactPage}/>
    <Route path="/faqs" component={FAQsPage}/>
    <Route path="/become-a-triperoo-agent" component={LocalExpertPage}/>
    <Route path="/support" component={SupportPage}/>

    <Route path="/(:placeId)/visit/(:placeName)" component={LocationHome}/>
    <Route path="/(:placeId)/visit/(:placeName)/add" component={LocationEdit}/>
    <Route path="/(:placeId)/visit-location/(:placeName)" component={LocationDetail}/>
    <Route path="/(:placeId)/visit-location/(:placeName)/edit" component={LocationDetailEdit}/>
    <Route path="/(:placeId)/visit/(:placeName)/events" component={LocationEvents}/>
    <Route path="/(:placeId)/visit/(:placeName)/reviews" component={LocationReviews}/>
    <Route path="/(:placeId)/visit/(:placeName)/questions" component={LocationQuestions}/>
    <Route path="/(:placeId)/visit/(:placeName)/(:questionId)/question" component={LocationQuestionDetail}/>
    <Route path="/(:placeId)/visit/(:placeName)/attractions" component={LocationAttractions}/>
    <Route path="/(:placeId)/visit/(:placeName)/points-of-interest" component={LocationPointsOfInterest}/>
    <Route path="/(:placeId)/visit/(:placeName)/restaurants" component={LocationRestaurants}/>
    <Route path="/(:placeId)/visit/(:placeName)/nightlife" component={LocationNightlife}/>
    <Route path="/(:placeId)/visit/(:placeName)/hotels" component={LocationHotels}/>


    <Route path="/holidays" component={Holidays}/>
    <Route path="/hotels" component={Hotels}/>
    <Route path="/hotels/search-results" component={HotelSearchResults}/>
    <Route path="/(:placeId)/visit/(:placeName)/hotels/(:hotelId)/hotel-checkout" component={HotelCheckout}/>
    <Route path="/(:placeId)/visit/(:placeName)/hotels/(:hotelId)" component={HotelDetail}/>
    <Route path="/flights" component={Flights}/>
    <Route path="/flights/search-results" component={FlightSearchResults} />

    <Route path="/travel-extras" component={TravelExtras}/>
    <Route path="/travel-extras/airport-parking" component={AirportParking}/>
    <Route path="/travel-extras/airport-hotels" component={AirportHotels}/>
    <Route path="/travel-extras/airport-lounges" component={AirportLounges}/>

    <Route path="/(:guid)/forgot-password" component={ForgotPassword}/>
    <Route path="/profile/(:guid)/(:customerName)" component={CustomerHome}/>
    <Route path="/profile/(:guid)/(:customerName)/profile" component={CustomerProfile}/>
    <Route path="/profile/(:guid)/(:customerName)/photos" component={CustomerPhotos}/>
    <Route path="/profile/(:guid)/(:customerName)/bookings" component={Bookings}/>
    <Route path="/profile/(:guid)/(:customerName)/reviews" component={CustomerReviews}/>
    <Route path="/profile/(:guid)/(:customerName)/trips" component={CustomerTrips}/>
    <Route path="/profile/(:guid)/(:customerName)/followers" component={CustomerFollowers}/>
    <Route path="/profile/(:guid)/(:customerName)/following" component={CustomerFollowing}/>
    <Route path="/profile/(:guid)/(:customerName)/trips/(:tripId)/(:tripName)" component={CustomerTripDetail}/>


    <Route path="/(:placeId)/visit/(:placeName)/article/take-a-fabulous-vacation-in-london" component={LondonArticle}/>
    <Route path="/(:placeId)/visit/(:placeName)/article/discover-new-york" component={NewYorkArticle}/>

    <Route path="*" component={NotFoundPage}/>
  </Route>
);
