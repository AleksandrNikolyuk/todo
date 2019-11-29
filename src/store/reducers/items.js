import {
	ADD_ITEM,
	DELETE_ITEM,
	CHANGE_SELECTED_ITEM,
	ADD_COMMENT
} from 'store/action';

// const initialState = {
// 	list: [],
// 	selectedItem: "",
// };

const initialState = {
	list: [
        {
            id: "k3ebb7gb",
            content: "Alex",
		}
    ],
    comments: [
        {
            id: "k3ebvdgz",
            itemId: ["k3ebb7gb" ],
            content: "Alex send a text message",
            iconCol: "red"
		},
		{
            id: "k3ebvdgz",
            itemId: ["k3ebb7gb" ],
            content: "Alex send a text message",
            iconCol: "red"
        }
    ],
    selected: {
        item: "k3ebb7gb",
    }
}

export default (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM:
			return {
				...state,
				list: [
					...state.list,
					action.payload,
				],
			};
		case DELETE_ITEM: {
			console.log(action);
			return {
				...state,
				list: state.list.filter(item => item.id !== action.payload.id),
			};
		}
		case CHANGE_SELECTED_ITEM: {
			return {
				...state,
				selectedItem: action.payload
			};
		}
		case ADD_COMMENT: {
			let items = [...state.list].map( todo => {
				if( todo.id === action.payload.parentId){
					todo.comments.push( action.payload );
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
