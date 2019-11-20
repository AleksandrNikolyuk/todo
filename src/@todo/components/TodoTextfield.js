import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
	root: {
        width: '430px',
    },
});

class TodoTextfield extends Component {
	render() {
		const { classes, label, rows, value, handler } = this.props;
		return (
			<div>
				<TextField
                    className={classes.root}
					multiline
                    id={"outlined-basic"}
                    label={label}
                    margin={"normal"}
                    variant={"outlined"}
                    rows={rows}
					value={value}
					onChange={handler}
				/>
			</div>
		);
	}
}

TodoTextfield.propTypes = {
	classes: PropTypes.object,
};

TodoTextfield.defaultProps = {
	classes: {},
	label: "Comments",
};

export default withStyles(styles, { withTheme: true })(TodoTextfield);