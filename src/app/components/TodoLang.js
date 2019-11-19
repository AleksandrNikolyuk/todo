import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from "react-i18next";
import { withStyles } from '@material-ui/core/styles';
import {
	InputLabel,
	FormControl,
	Select,
} from '@material-ui/core';

const styles = () => ({
	root: {
		width: '200px',
	},
});

class TodoLang extends Component {
	render() {
		const { classes, label, i18n } = this.props;
		return (
			<FormControl className={classes.root}>
				<InputLabel htmlFor="filled-age-native-simple">{label}</InputLabel>
				<Select
					native
					inputProps={{
						name: 'Language',
						id: 'filled-age-native-simple',
					}}
				>
					<option value=""/>
					<option value={1} onClick={() => i18n.changeLanguage("en")}>English</option>
					<option value={2} onClick={() => i18n.changeLanguage("ru")}>Russian</option>
				</Select>
			</FormControl>
		);
	}
}

TodoLang.defaultProps = {
	label: "Language"
}

TodoLang.propTypes = {
	classes: PropTypes.object,
	inputProps: PropTypes.object,
	onCklick: PropTypes.func,
};

export default withStyles(styles, { withTheme: true })(TodoLang);