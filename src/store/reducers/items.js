import {
	ADD_ITEM,
	DELETE_ITEM,
	CHANGE_SELECTED_ITEM,
} from 'store/action';

const initialState = {
	list: [],
	selectedItem: null,
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
			};
		case DELETE_ITEM: {
			console.log(action);
			return {
				...state,
				list: state.list.filter(item => item.id !== action.payload.id),
			};
		}
		case CHANGE_SELECTED_ITEM: {
			return {
				...state,
				selectedItem: action.payload
			  };
		}
		default:
			return state;
	}
};
