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
			return [
				...state.filter(item => item.id !== payload.id),
			];
		}
		case Actions.CHANGE_ITEM_CONTENT: {
			
			return [
				...state.map(e => e.id === payload.id ?  e.content : null),
				payload
			];
		}
		default:
			return state;
	}
};
