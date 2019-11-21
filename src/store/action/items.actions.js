import * as Actions from './index';
import uniqid from 'uniqid';

export const addItem = data => (dispatch) => {
	dispatch({
		type: Actions.ADD_ITEM,
		payload: {
			id: uniqid(),
			title: data,
			comments: [],
		},
	});
};

export const deletItem = id => (dispatch) => {
	dispatch({
		type: Actions.DELETE_ITEM,
		payload: {
			id,
		},
	});
};