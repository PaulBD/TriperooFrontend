import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store';
import { syncHistoryWithStore } from 'react-router-redux';
import cookie from 'react-cookie';
const uuidV4 = require('uuid/v4');
import ReactGA from 'react-ga';
ReactGA.initialize('UA-61218289-1'); 

const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

let triperooCookie = cookie.load('triperooUserId');

if (triperooCookie == '' || triperooCookie == undefined)
{
	let triperooUserId = uuidV4();
    cookie.save('triperooUserId', triperooUserId, { path: '/', secure: false });
}

render(
  <Provider store={store}>
    <Router onUpdate={logPageView} history={history} routes={routes} />
  </Provider>, document.getElementById('app')
);

// Setup Google Analytics
function logPageView() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}