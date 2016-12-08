import {combineReducers} from 'redux';

// Reducers
import newsReducer from '../modules/NewsDucks';

export const makeRootReducer = (asyncReducers) => {
    // Combine reducers here to improve performance
    return combineReducers({
        // Add sync reducers here
        newsReducer,
        ...asyncReducers
    });
};

// export the newsReducer
export {newsReducer};

// export the default makeRootReducer
export default makeRootReducer;
