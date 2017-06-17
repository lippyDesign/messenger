import { combineReducers } from 'redux';
import auth from './auth_reducer';
import message from './message_reducer';

export default combineReducers({ auth, message });