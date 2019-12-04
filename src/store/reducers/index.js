import items from './items';
import comments from './comments';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	items,
	comments,
});

export default rootReducer;