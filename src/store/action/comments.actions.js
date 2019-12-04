import * as Actions from 'store/action';
import uniqid from 'uniqid';


export const addComment = data => (dispatch, getState) => {
    console.log( dispatch, getState );
    const selected = getState().item.selected;
	dispatch({
		type: Actions.ADD_COMMENT,
		payload: {
			id: uniqid(),
            content: data,
            itemId: selected,
		},
	});
};