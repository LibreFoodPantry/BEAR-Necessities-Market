import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from '../_reducers';

const loggerMiddleware = createLogger();

/**
 *  A store holds the whole state tree of your application.
 *  The only way to change the state inside it is to dispatch an action on it.
 *
 *  A store is not a class. It's just an object with a few methods on it.
 *  To create it, pass your root reducing function to createStore.
 *
 *  Store methods:
 *      - getState()
 *      - dispatch(action)
 *      - subscribe(listener)
 *      - replaceReducer(nextReducer)
 *
 *  Reference: https://redux.js.org/api/store
 */

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
    )
);
