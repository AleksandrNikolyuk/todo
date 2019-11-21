import {
	ADD_ITEM,
	DELETE_ITEM,
} from 'store/action';

const initialState = {
	list: [],
	// selectedItem: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				list: [
					...state.list,
					action.payload,
				],
				// selectedItem: action.payload[0].id,
			};
		case DELETE_ITEM: {
			console.log(action);
			return {
				...state,
				list: state.list.filter(item => item.id !== action.payload.id),
			};
		}
		default:
			return state;
	}
};
