import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoItem from 'app/components/TodoItem';
import TodoListItem from 'app/components/TodoListItem';

const styles = () => ({
	root: {
		width: '35%',
		padding: '20px',
		margin: '30px 50px',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
});


function TodoItemsContainer({classes}) {
	
	return (
		<div className={classes.root}>
			<TodoItem/>
			<TodoListItem/>
		</div>
	);
}

TodoItemsContainer.defaultProps = {};

TodoItemsContainer.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoItemsContainer);