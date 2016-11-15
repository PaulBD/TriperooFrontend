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
import HotelPage from './apps/hotel';
import SearchResults from './apps/search';

export default (
  <Route path="/" component={Container}>
    <IndexRoute component={HomePage}/>
    <Route path="explore-destinations" component={DestinationPage}/>
    <Route path="about-us" component={AboutPage}/>
    <Route path="terms" component={TermsPage}/>
    <Route path="privacy-policy" component={PrivacyPage}/>
    <Route path="city" component={CityPage}/>
    <Route path="hotel" component={HotelPage}/>
    <Route path="hotel-search" component={SearchResults}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
