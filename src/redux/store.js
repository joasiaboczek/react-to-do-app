import { configureStore } from '@reduxjs/toolkit'
import initialState from './initialState';

const reducer = (state, action) => {
  return state;
};

const store = configureStore(
  { reducer, preloadedState: initialState },
  
);

export default store;