import { combineReducers } from 'redux';
import hotelSearchReducer from './hotelSearchReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  hotelSearchReducer,
  routing: routerReducer
});

export default rootReducer;
