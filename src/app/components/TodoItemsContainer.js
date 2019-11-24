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

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<TodoItem/>
				<TodoListItem/>
			</div>
		);
	}
}

TodoItemsContainer.defaultProps = {};

TodoItemsContainer.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoItemsContainer);