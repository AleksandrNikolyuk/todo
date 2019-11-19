import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import  TodoComments from 'app/components/TodoComments';
import  TodoMenu from 'app/components/TodoMenu';
import  TodoItemsContainer from 'app/components/TodoItemsContainer';
import { withStyles } from '@material-ui/core/styles';
// import 
// 	addItem
//  from './store/action/actions.payload';

const styles = () => ({
	root: {
		width: '100%',
		height: '100vh',
		display: 'flex',
		justifyContent: 'row',
	},
});

class TodoLayout extends Component {

	render() {
		const { classes } = this.props;
		
		return (
			<div className={classes.root}>
				<TodoMenu/>
				<TodoItemsContainer/>
				<TodoComments/>
			</div>
		);
	}
}

TodoLayout.propTypes = {
	onClick: PropTypes.func,
	onChange: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(TodoLayout);