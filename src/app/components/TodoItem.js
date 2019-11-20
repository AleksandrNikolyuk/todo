import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoButton, TodoTextfield } from '@todo';
import { withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { addItem } from 'store/action/actions.payload';

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
		newitem: '',
	};

	handleAddItem = e => {
		console.log(e);
		this.setState({ newitem: e.target.value });
	};

	// handleSubmitItem = () => {
	// 	const { addItem, clickHandler } = this.props;
	// 	// addItem([ { title: newitem, id: {key}, comments: [] } ]);
	// 	this.setState({ newitem: '' });
	// };

	render() {
		const {newitem} = this.state
		const {t, classes, label, clickHandler, add_item } = this.props;
		const { handleSubmitItem, handleAddItem } = this
		return (
			<div className={classes.root}>
				<h1>{t('items')}</h1>
				<div className={classes.inputBlock}>
					<TodoTextfield
						value={newitem}
						handler={handleAddItem}
						label={ t("user") }
					/>
					<TodoButton
						label={t('buttons.addNew')}
						clickHandler={add_item(newitem)}
					/>
				</div>
			</div>
		);
	}
}

TodoItem.defaultProps = {
	value: '',
};

TodoItem.propTypes = {
	handler: PropTypes.func,
	value: PropTypes.string,
	classes: PropTypes.object,
};

const mapStateToProps = state => ({
	todos: state.todos,
});

const mapDispatchToProps = dispatch => ({ 
	add_item: (data) => () => {
		dispatch(addItem(data))
	}
});

export default connect(mapStateToProps, mapDispatchToProps) (withTranslation()(withStyles(styles, { withTheme: true })(TodoItem)));
