import { combineReducers } from 'redux';

import {
  userListReducers,
} from '../modules/home/HomeReducers';

export const allReducers = combineReducers({
  userListReducers,
});
