import * as Actions from 'store/action';

const initialState = {
	item: null,
	comment: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Actions.CHANGE_SELECTED_ITEM: {
			return {
				...state,
				item: payload.id,
			};
		}
		default: {
			return state;
		}
	}
}