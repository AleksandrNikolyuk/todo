import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TodoItem from 'app/components/TodoItem';

import TodoListItem from 'app/components/TodoListItem';

const styles = () => ({
	root: {
		width: '35%',
		padding: '20px',
		margin: '50px',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
});

class TodoItemsContainer extends Component {

	// static defaultProps = {
	// 	handleSubmitItem: null,
	// 	onChange: null,
	// 	newitem: '123',
	// };

	render() {
		const {
			classes,
			// list,
		} = this.props;
		
		// const { list } = this.props.todos;
		return (
			<div className={classes.root}>
				<TodoItem/>
				<TodoListItem
					// list={list}
				/>
			</div>
		);
	}
}

TodoItemsContainer.defaultProps = {
	newitem: '',
}

TodoItemsContainer.propTypes = {
	handleSubmitItem: PropTypes.func,
	onChange: PropTypes.func,
	// list: PropTypes.array.isRequired,
	newitem: PropTypes.string,
	classes: PropTypes.object,
};



export default withStyles(styles, { withTheme: true })(TodoItemsContainer);