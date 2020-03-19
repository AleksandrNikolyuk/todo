import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import TodoCommentsContainer from 'app/components/TodoCommentsContainer';
import TodoMenu from 'app/components/TodoMenu';
import TodoItemsContainer from 'app/components/TodoItemsContainer';

const styles = () => ({
	root: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'row',
	},
});


function TodoLayout({classes}) {
	
	return (
		<div className={classes.root}>
			<TodoMenu/>
			<TodoItemsContainer/>
			<TodoCommentsContainer/>
		</div>
	);
}

TodoLayout.propTypes = {
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoLayout);