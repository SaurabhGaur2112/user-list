import { createStore } from 'redux';
import { allReducers } from '../reducers';
import middleware from './middleware';

export default function initializeStore() {
  return createStore(
    allReducers,
    middleware,
  );
}
