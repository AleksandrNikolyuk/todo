import React from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
	foto: {
		width: '52px',
		height: '52px',
		marginRight: '14px',
		background: 'orange',
		display: 'block',
	},
});

function TodoImage(props) {
	const { classes } = props;
	return (
		<div className={classes.foto}>
		</div>
	);
}

TodoImage.propTypes = {};

export default withStyles(styles)(TodoImage);