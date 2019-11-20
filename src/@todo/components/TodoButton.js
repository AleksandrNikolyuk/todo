import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';


const styles = () => ({
	root: {},
	button: {
		height: '50px',
		width: '100px',
		background: '#6495ed',
		color: 'white',
		float: 'right',
	},
});

class TodoButton extends Component {
	render() {
		const { classes, label, clickHandler } = this.props;
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
}

TodoButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

TodoButton.defaultProps = {
	classes: {},
	label: '',
};

export default withStyles(styles, { withTheme: true })(TodoButton);