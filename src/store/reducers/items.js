import * as Actions from 'store/action';

const initialState = [];

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Actions.ADD_ITEM: {
			return [
				...state,
				payload,
			];
		}
		case Actions.DELETE_ITEM: {
			return {
				...state.filter(item => item.id !== payload.id),
			};
		}
		default:
			return state;
	}
};
