import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import TodoLang from 'app/components/TodoLang';

const styles = () => ({
	root: {
		background: '#b0e0e6',
		width: '20%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: '75px',
	},
});

function TodoMenu({
	classes,
	t
}) {
	
	return (
		<div className={classes.root}>
			<h1>{t('title')}</h1>
			<TodoLang/>
		</div>
	);
	
}

TodoMenu.defaultProps = {
	classes: {},
};

TodoMenu.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
};

export default withTranslation()(withStyles(styles)(TodoMenu));