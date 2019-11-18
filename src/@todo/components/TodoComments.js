import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { TodoButton, TodoImage } from '@todo';

const styles = () => ({
	box: {
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
	textField: {
		width: '100%',
	},
});

class TodoComments extends Component {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.box}>
				<h1>Comments</h1>
				<div className={classes.commentBlock}>
					<TodoImage/>
					<TextField
						multiline
						id="outlined-basic"
						className={classes.textField}
						label="Comment"
                        margin="normal"
                        variant="outlined"
                        rows="4"
					/>
				</div>
				<TodoButton/>
			</div>
		);
	}
}

TodoComments.propTypes = {};

export default withStyles(styles)(TodoComments);