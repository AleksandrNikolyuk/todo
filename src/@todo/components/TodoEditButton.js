import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';


const styles = () => ({
	root: {},
	button: {
		height: '50px',
        width: '50px',
        marginRight: '10px',
		color: '#D1B517',
		float: 'right',
    },
});

function TodoEditButton({
	classes,
	clickHandler
}) {
	return (
		<div className={classes.root}>

			<Fab
				variant="outlined"
				aria-label="edit"
				onClick={clickHandler}
				className={classes.button}
			>
				<EditIcon />
			</Fab>
		</div>
	);
}

TodoEditButton.propTypes = {
	classes: PropTypes.object,
	label: PropTypes.string,
	onClick: PropTypes.func,
};

TodoEditButton.defaultProps = {
	classes: {},
	label: '',
};

export default withStyles(styles, { withTheme: true })(TodoEditButton);