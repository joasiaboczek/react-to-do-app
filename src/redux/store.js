import { configureStore, combineReducers } from '@reduxjs/toolkit';
import initialState from './initialState';
import shortid from 'shortid';

/*const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-COLUMN':
      return { ...state, columns: [...state.columns, { ...action.payload, id: shortid() }] }
    case 'ADD_CARD':
      return { ...state, cards: [...state.cards, { ...action.payload, id: shortid() }] };
    default:
      return state;
  }
}; */

const columnsReducer = (state = initialState.columns, action) => {
  switch(action.type) {
    case 'ADD_COLUMN':
      return [...state, { ...action.payload, id: shortid() }];
    default:
      return state;
  }
}

const cardsReducer = (state = initialState.cards, action) => {
  switch(action.type) {
    case 'ADD_CARD':
      return [...state, { ...action.payload, id: shortid() }];
      default:
      return state;
  }
}

const searchStringReducer = (state, action) => {
  switch(action.type) {
    case 'UPDATE_SEARCH_STRING':
      return { ...state, searchString: action.payload };
      default:
      return state;
  }
}

const subreducers = {
  columns: columnsReducer,
  cards: cardsReducer,
  searchString: searchStringReducer

}

const reducer = combineReducers(subreducers);

const store = configureStore(
  {
    reducer
  }
);

export default store;