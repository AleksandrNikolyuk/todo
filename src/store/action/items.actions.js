import * as Actions from './index';
import uniqid from 'uniqid';

export const addItem = data => (dispatch) => {
	dispatch({
		type: Actions.ADD_ITEM,
		payload: {
			id: uniqid(),
			content: data,
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

export const changeItem = item => (dispatch) => {
	dispatch({
		type: Actions.CHANGE_SELECTED_ITEM,
		payload: {
			item,
		},
	});
};

export const changeItemContent = (data) => (dispatch) => {
	dispatch({
		type: Actions.CHANGE_ITEM_CONTENT,
		payload: {
			content: data,
		}
	})
}