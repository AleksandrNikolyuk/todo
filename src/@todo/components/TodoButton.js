import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = () => ({
	root: {},
	button: {
		height: '50px',
		width: '150px',
		background: '#6495ed',
		color: 'white',
		float: 'right',
	},
});

class TodoButton extends Component {
	render() {
		const { classes, label } = this.props;
		return (
			<div className={classes.root}>
				<Button
					variant={'outlined'}
					color={'secondary'}
					onClick={() => {
					}}
					className={classes.button}
				>
					{label}
				</Button>
			</div>
		);
	}
}

TodoButton.propTypes = {};

export default withStyles(styles)(TodoButton);