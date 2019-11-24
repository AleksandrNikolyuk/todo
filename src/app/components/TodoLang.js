import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core/styles';
import i18n from 'i18n';
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

	handleChange = (e) => {
		i18n.changeLanguage(e.target.value);
	};

	render() {
		const { classes, t } = this.props;
		return (
			<FormControl className={classes.root}>
				<InputLabel htmlFor="filled-age-native-simple">{t('buttons.languages')}</InputLabel>
				<Select
					native
					inputProps={{
						name: 'Language',
						id: 'filled-age-native-simple',
					}}
					onChange={this.handleChange}
				>
					<option value=""/>
					<option value={'en'}>{t('English')}</option>
					<option value={'ru'}>{t('Russian')}</option>
				</Select>
			</FormControl>
		);
	}
}

TodoLang.defaultProps = {
	classes: {},
	t: '',
};

TodoLang.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
	inputProps: PropTypes.object,
	onCklick: PropTypes.func,
};

export default withTranslation()(withStyles(styles, { withTheme: true })(TodoLang));