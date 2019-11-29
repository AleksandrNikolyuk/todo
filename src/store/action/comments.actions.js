import * as Actions from 'store/action';
import uniqid from 'uniqid';


export const addComment = data => (dispatch, getState) => {
    console.log( dispatch, getState );
    const selectedItem = getState().todos.selectedItem;
	dispatch({
		type: Actions.ADD_COMMENT,
		payload: {
			id: uniqid(),
            content: data,
            // parentId: selectedItem,
		},
	});
};