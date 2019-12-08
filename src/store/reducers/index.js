import items from './items';
import comments from './comments';
import selected from './selected';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	items,
	comments,
	selected,
});

export default rootReducer;