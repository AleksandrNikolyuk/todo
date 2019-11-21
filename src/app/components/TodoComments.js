import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { withStyles } from '@material-ui/core';
import {
	TodoButton,
	TodoImage,
	TodoTextfield,
} from '@todo';

const styles = () => ({
	root: {
		width: '35%',
		padding: '20px',
		margin: '50px 50px 50px 0',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
	commentBlock: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

class TodoComments extends Component {
	render() {
		const { classes, t } = this.props;
		return (
			<div className={classes.root}>
				<h1>{t('comments')}</h1>
				<div className={classes.commentBlock}>
					<TodoImage/>
					<TodoTextfield
						label={t('comments')}
					/>
				</div>
				<TodoButton
					label={t('buttons.addNew')}
				/>
			</div>
		);
	}
}

TodoComments.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func,
};

TodoComments.defaultProps = {
	classes: {},
};

export default withTranslation()(withStyles(styles, { withTheme: true })(TodoComments));