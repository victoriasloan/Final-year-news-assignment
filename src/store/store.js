import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];

const INITIAL_STATE = {}; //Initial state of the app

//Creation of store
const store = createStore(
    makeRootReducer(), //Main function in reducers.js
    INITIAL_STATE, //Initial state
    composeEnhancers(applyMiddleware(...middleware))
);

store.asyncReducers = {};

export default store;
