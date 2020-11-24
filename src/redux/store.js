import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import listingsReducer from './listingsReducer';

const reducer = combineReducers({
    listings: listingsReducer,
});

const store = createStore(
  reducer, applyMiddleware(thunk)
)

export default store;