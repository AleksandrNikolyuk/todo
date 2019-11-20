import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger"
import rootReducer from 'store/reducers/index';

// const initialState = {}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const middleware = applyMiddleware(logger, thunk);

const store = createStore(
	rootReducer,
	composeEnhancers(middleware),
);

export default store;
