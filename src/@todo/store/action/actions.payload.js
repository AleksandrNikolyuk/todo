import { ADD_ITEM } from '@todo/store/action/types';

export const addItem = data => (dispatch) => {
	dispatch({
		type: ADD_ITEM,
		payload: data,
	});
};
