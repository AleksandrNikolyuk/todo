import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoButton, TodoImage, TodoTextfield } from '@todo';

const styles = () => ({
	root: {
		width: '35%',
		padding: '20px',
		margin: '50px 50px 50px 0',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
	commentBlock: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

class TodoComments extends Component {
	render() {
		const { classes, label, rows } = this.props;
		return (
			<div className={classes.root}>
				<h1>{label}</h1>
				<div className={classes.commentBlock}>
					<TodoImage/>
					<TodoTextfield
						rows={"4"}
					/>
				</div>
				<TodoButton/>
			</div>
		);
	}
}

TodoComments.propTypes = {
	classes: PropTypes.object
};

TodoComments.defaultProps = {
	classes: {},
	label: 'Comments',
};

export default withStyles(styles, { withTheme: true })(TodoComments);