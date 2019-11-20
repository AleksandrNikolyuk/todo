import {
	ADD_ITEM,
} from 'store/action/types';

const initialState = {
	list: [],
	// selectedItem: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				list: [ ...state.list, action.payload ],
				// selectedItem: action.payload[0].id,
			};
		default:
			return state;
	}
};