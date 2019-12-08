import * as Actions from 'store/action';

const initialState = {
	list: [],
};

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case Actions.ADD_ITEM: {
			return {
				...state,
				list: [
					...state.list,
					payload,
				],
			};
		}
		case Actions.DELETE_ITEM: {
			return {
				...state,
				list: state.list.filter(item => item.id !== payload.id),
			};
		}
		default:
			return state;
	}
};
