import * as Actions from 'store/action';

const initialState = {
    items: null,
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Actions.CHANGE_SELECTED_ITEM: {
			return {
				...state,
				items: payload.item,
			};
		}
		default: {
			return state;
		}
	}
}