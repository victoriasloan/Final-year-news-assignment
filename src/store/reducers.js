import {combineReducers} from 'redux';

// Reducers
import newsReducer from '../modules/NewsDucks';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        // Add sync reducers here
        newsReducer,
        ...asyncReducers
    });
};

export {newsReducer};

export default makeRootReducer;
