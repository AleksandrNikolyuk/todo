import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	withStyles,
	TextField,
} from '@material-ui/core';

const styles = () => ({
	root: {
		width: '400px',
		// width: 'auto',
		margin: '0'
	},
});

class TodoTextfield extends Component {
	render() {
		const { classes, label, rows, value, handlerChange } = this.props;
		return (
			<div>
				<TextField
					className={classes.root}
					multiline
					id={'outlined-basic'}
					label={label}
					margin={'normal'}
					variant={'outlined'}
					rows={rows}
					value={value}
					onChange={handlerChange}
				/>
			</div>
		);
	}
}

TodoTextfield.propTypes = {
	classes: PropTypes.object,
	rows: PropTypes.number,
	label: PropTypes.string,
	value: PropTypes.string,
	handlerChange: PropTypes.func,
};

TodoTextfield.defaultProps = {
	classes: {},
	handlerChange: () => {
	},
	label: '',
	value: '',
	row: 4,
};

export default withStyles(styles, { withTheme: true })(TodoTextfield);