import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import logger from "redux-logger"
import rootReducer from './@todo/store/reducers/index';

// const initialState = {}

const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const middleware =  applyMiddleware(thunk);

const store = createStore( 
    rootReducer, 
    composeEnhancers(middleware)
);

export default store;
