import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './apps';
import HomePage from './apps/homePage';
import AboutPage from './apps/info/aboutPage';
import TermsPage from './apps/info/termsPage';
import PrivacyPage from './apps/info/privacyPage';
import NotFoundPage from './apps/notFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="about-us" component={AboutPage}/>
    <Route path="terms" component={TermsPage}/>
    <Route path="privacy-policy" component={PrivacyPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
