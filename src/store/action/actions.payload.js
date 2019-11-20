import { ADD_ITEM } from './types';
import uniqid from 'uniqid';

export const addItem = data => (dispatch) => {
	dispatch({
		type: ADD_ITEM,
		payload: {
			id: uniqid(),
			title: data,
			comments: []
		},
	});
};
