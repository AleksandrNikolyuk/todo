import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
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

	state = {
		newItem: '',
	};

	handleAddItem = e => {
		this.setState({ newItem: e.target.value });
	};

	render() {
		const {newItem} = this.state
		const {t, classes, addItem } = this.props;
		const {  handleAddItem,  } = this

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
						clickHandler={addItem(newItem)}
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
	todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
	addItem: (data) => () => {
		dispatch(addItem(data));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoItem)));
