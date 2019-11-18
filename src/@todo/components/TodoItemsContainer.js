import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoItem, TodoListItem } from '@todo';

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
	render() {
		const {
			classes,
			handleSubmitItem,
			onChange,
			list,
			newitem,
		} = this.props;
		return (
			<div className={classes.root}>
				<TodoItem
					onChange={onChange}
					onClick={handleSubmitItem}
					value={newitem}
				/>
				<TodoListItem
					list={list}
				/>
			</div>
		);
	}
}

TodoItemsContainer.defaultProps = {
	handleSubmitItem: null,
	onChange: null,
	newitem: '',
};

TodoItemsContainer.propTypes = {
	handleSubmitItem: PropTypes.func,
	onChange: PropTypes.func,
	list: PropTypes.array.isRequired,
	newitem: PropTypes.string,
};

export default withStyles(styles)(TodoItemsContainer);