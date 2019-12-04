import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import {
	TodoButton,
	TodoTextfield,
} from '@todo';
import { addItem } from 'store/action';

const styles = () => ({
	root: {
		padding: '20px',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
	inputBlock: {
		height: '100px',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

class TodoItem extends Component {

	state = {
		newItem: '',
	};

	handleAddItem = e => {
		this.setState({ newItem: e.target.value });
	};

	handleSubmit = () => {
		const { newItem } = this.state
		this.props.add_Item(newItem)
		this.setState({newItem: ''})
	}

	render() {
		const {newItem} = this.state
		const {t, classes } = this.props;
		const {  handleAddItem, handleSubmit  } = this

		return (
			<div className={classes.root}>
				<h1>{t('items')}</h1>
				<div className={classes.inputBlock}>
					<TodoTextfield
						value={newItem}
						handlerChange={handleAddItem}
						label={t('user')}
					/>
					<TodoButton
						label={t('buttons.addNew')}
						clickHandler={handleSubmit}
					/>
				</div>
			</div>
		);
	}
}

TodoItem.defaultProps = {
	value: '',
	addItem: () => {
	},
};

TodoItem.propTypes = {
	handler: PropTypes.func,
	t: PropTypes.func,
	value: PropTypes.string,
	classes: PropTypes.object,
	addItem: PropTypes.func,
};

const mapStateToProps = state => ({
	...state
});

const mapDispatchToProps = dispatch => ({
	add_Item: (data) => {
		dispatch(addItem(data));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoItem)));
