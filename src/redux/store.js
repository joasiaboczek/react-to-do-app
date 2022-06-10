import { configureStore } from '@reduxjs/toolkit';
import initialState from './initialState';
import shortid from 'shortid';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD-COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] }
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    default:
      return state;
  }
};

const store = configureStore(
  {
    reducer, preloadedState: initialState
  }
);

export default store;