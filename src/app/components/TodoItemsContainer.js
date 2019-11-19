import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TodoItem from 'app/components/TodoItem';
import { connect } from 'react-redux';
import TodoListItem from 'app/components/TodoListItem';

const styles = () => ({
	root: {
		width: '35%',
		padding: '20px',
		margin: '50px',
		display: 'flex',
		flexDirection: 'column',
		borderWidth: '2px',
		borderStyle: 'solid',
		borderColor: '#eee',
	},
});

class TodoItemsContainer extends Component {

	state = {
		newitem: '',
	};

	handleAddItem = value => {
		console.log(value);
		this.setState({ newitem: value });
	};

	render() {
		const {
			classes,
			onChange,
			// list,
		} = this.props;
		const {newitem} = this.state
		const { handleAddItem } = this
		// const { list } = this.props.todos;
		return (
			<div className={classes.root}>
				<TodoItem
					onClick={handleAddItem}
					onChange={onChange}
					value={newitem}
				/>
				<TodoListItem
					// list={list}
				/>
			</div>
		);
	}
}

TodoItemsContainer.defaultProps = {
	handleSubmitItem: null,
	onChange: null,
	newitem: '',
};

TodoItemsContainer.propTypes = {
	handleSubmitItem: PropTypes.func,
	onChange: PropTypes.func,
	list: PropTypes.array.isRequired,
	newitem: PropTypes.string,
	classes: PropTypes.object,
};

const mapStateToProps = state => ({
	todos: state.todos,
});

const mapDispatchToProps = dispatch => ({ 
	// addItem 
});

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(TodoItemsContainer));