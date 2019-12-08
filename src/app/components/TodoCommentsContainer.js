import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoComments from 'app/components/TodoComments';
import TodoListComments from 'app/components/TodoListComments';

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

class TodoCommentsContainer extends Component {

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<TodoComments/>
				<TodoListComments/>
			</div>
		);
	}
}

TodoCommentsContainer.defaultProps = {};

TodoCommentsContainer.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoCommentsContainer);