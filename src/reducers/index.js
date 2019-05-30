import { combineReducers } from 'redux';
import authReducer from './authReducer';
import parcelsReducer from './parcelsReducer.js'

export default combineReducers({
  auth: authReducer,
  parcels: parcelsReducer,
});