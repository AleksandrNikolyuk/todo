import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoButton, TodoTextfield } from '@todo';
import { withTranslation } from "react-i18next";

const styles = () => ({
	root: {
		padding: '20px',
		margin: '10px',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
	inputBlock: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

class TodoItem extends Component {
	
	handleSubmitItem = () => {
		const { addItem } = this.props;
		const { newitem } = this.state;
		// addItem([ { title: newitem, id: '1', comments: [] } ]);
		this.setState({ newitem: '' });
	};

	render() {
		const {t, i18n, classes, label } = this.props;
		const { handleSubmitItem } = this
		return (
			<div className={classes.root}>
				<h1>{label}</h1>
				<div className={classes.inputBlock}>
					<TodoTextfield
						// label={ t("user") }
					/>
					<TodoButton
						onClick={() => handleSubmitItem(console.log('bla bla bla'))}
					/>
				</div>
			</div>
		);
	}
}

TodoItem.defaultProps = {
	onClick: null,
	onChange: null,
	value: '',
	label: 'Item'
};

TodoItem.propTypes = {
	onClick: PropTypes.func,
	onChange: PropTypes.func,
	value: PropTypes.string,
	classes: PropTypes.object,
};

export default withStyles(styles, { withTheme: true })(TodoItem);
