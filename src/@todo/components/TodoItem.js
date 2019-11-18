import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { TodoButton } from '@todo';

const styles = () => ({
	box: {
		padding: '20px',
		margin: '10px',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
	inputBlock: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textField: {
		width: 430,
	},
});

class TodoItem extends Component {

	render() {

		const { classes, value, onChange, handleSubmitItem, list } = this.props;
		return (
			<div className={classes.box}>
				<h1>Item</h1>
				<div className={classes.inputBlock}>
					<TextField
						id="outlined-basic"
						className={classes.textField}
						label="User name"
						margin="normal"
						variant="outlined"
						onChange={e => onChange(e.target.value)}
						value={value}
					/>
					<TodoButton
						onClick={() => handleSubmitItem(console.log('bla bla bla'))}
					/>
				</div>
			</div>
		);
	}
}

TodoItem.defaultProps = {
	onClick: null,
	onChange: null,
	value: '1',
};

TodoItem.propTypes = {
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	value: PropTypes.string,
};

export default withStyles(styles)(TodoItem);