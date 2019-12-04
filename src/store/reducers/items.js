import {
	REQUESTED_FIRST_PAGE,
	DATA_RECEIVED,

	ADD_ITEM,
	DELETE_ITEM,
	CHANGE_SELECTED_ITEM,
	ADD_COMMENT
} from 'store/action';

const initialState = {
	loading: false,
	list: [],
	comments: [],
	selected: {},
};



export default (state = initialState, action) => {
	switch (action.type) {	
	case REQUESTED_FIRST_PAGE: 
		return {
			...state,
			loading: true
		}
	case DATA_RECEIVED:
		return {
			...state,
			loading: false,
			list: action.payload.list,
			comments: action.payload.comments,
			selected: action.payload.selected
		}
		case ADD_ITEM:
			return {
				...state,
				list: [
					...state.list,
					action.payload,
				],
			};
		case DELETE_ITEM: {
			return {
				...state,
				list: state.list.filter(item => item.id !== action.payload.id),
			};
		}
		case CHANGE_SELECTED_ITEM: {
			return {
				...state,
				selected: action.payload
			};
		}
		case ADD_COMMENT: {
			let items = [...state.list].map( todo => {
				if( todo.id === action.payload.itemId){
					todo.comments.content.push( action.payload );
				}
				return todo;
			})
			return {
				...state,
				list: items
			};
		}
		default:
			return state;
	}
};
