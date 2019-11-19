import items from './items';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	todos: items,
});

export default rootReducer;