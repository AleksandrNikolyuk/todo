import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
	InputLabel,
	FormControl,
	Select,
} from '@material-ui/core';

const styles = () => ({
	formControl: {
		width: '200px',
	},
});

class TodoLang extends Component {
	render() {
		const { classes } = this.props;
		return (
			<FormControl className={classes.formControl}>
				<InputLabel htmlFor="filled-age-native-simple">Lang</InputLabel>
				<Select
					native
					//      value={state.age}
					//      onChange={handleChange('age')}
					inputProps={{
						name: 'Lang',
						id: 'filled-age-native-simple',
					}}
				>
					<option value=""/>
					<option value={1}>English</option>
					<option value={2}>Ukraine</option>
					<option value={3}>Poland</option>
				</Select>
			</FormControl>
		);
	}
}

TodoLang.propTypes = {};

export default withStyles(styles)(TodoLang);