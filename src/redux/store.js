import { configureStore } from '@reduxjs/toolkit'
import initialState from './initialState';

const reducer = (state, action) => {
  if(action.type === 'ADD_COLUMN') return { ...state, columns: [...state.columns, action.newColumn]}
  return state;
};

const store = configureStore(
  { reducer, preloadedState: initialState },
  
);

export default store;