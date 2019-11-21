import { ADD_ITEM, DELETE_ITEM } from './types';
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

export const deletItem = id => (dispatch) => {
	dispatch ({
		type: DELETE_ITEM,
		payload: id
	});
};