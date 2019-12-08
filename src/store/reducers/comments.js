import * as Actions from 'store/action';

const initialState = {
	itemId: null,
	comment: [],
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case Actions.ADD_COMMENT: {
			return {
				...state,
				comment: [
					...state.comment,
					payload,
				],
			};
		}
		case Actions.DELETE_ITEM: {
			return {
				...state,
				comment: state.comment.filter( comment => {
					const commentDeleted = comment.itemId.some( id => id === payload.id);
					return !commentDeleted;
				})
			}
		}
		default: {
			return state;
		}
	}
}