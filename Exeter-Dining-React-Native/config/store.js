import { applyMiddleware, createStore, combineReducers } from 'redux';
import reducers from '../reducers';
import devToolsEnhancer from 'redux-devtools-extension';

const reducer = combineReducers(reducers);
const initialState = {};

export const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
