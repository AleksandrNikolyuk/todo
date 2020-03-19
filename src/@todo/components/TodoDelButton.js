import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = () => ({
	root: {},
	button: {
		height: '50px',
		width: '80px',
		color: 'red',
		float: 'right',
	},
});

function TodoDelButton({
	classes,
	label,
	clickHandler
}) {
	return (
		<div className={classes.root}>
			<Button
				variant={'outlined'}
				color={'secondary'}
				onClick={clickHandler}
				className={classes.button}
			>
				{label}
			</Button>
		</div>
	);
}

TodoDelButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

TodoDelButton.defaultProps = {
	classes: {},
	label: '',
};

export default withStyles(styles, { withTheme: true })(TodoDelButton);