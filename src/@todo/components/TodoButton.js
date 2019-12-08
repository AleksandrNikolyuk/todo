import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	withStyles,
	Button,
} from '@material-ui/core';

const styles = () => ({
	root: {},
	button: {
		height: '50px',
		width: '100px',
		background: 'green',
		color: 'white',
		float: 'right',
		'&:hover': {
			color: 'green',
			border: '1px solid green'
		},
	},
});

class TodoButton extends Component {
	render() {
		const { classes, label, clickHandler } = this.props;
		return (
			<div className={classes.root}>
				<Button
					variant={'outlined'}
					onClick={clickHandler}
					className={classes.button}
				>
					{label}
				</Button>
			</div>
		);
	}
}

TodoButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	clickHandler: PropTypes.func,
};

TodoButton.defaultProps = {
	classes: {},
	label: '',
	clickHandler: () => {
	},
};

export default withStyles(styles, { withTheme: true })(TodoButton);