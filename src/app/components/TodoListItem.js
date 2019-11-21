import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TodoButton, TodoDelButton } from '@todo';
import { withTranslation } from "react-i18next";
import { connect } from 'react-redux';
import { deletItem } from 'store/action/actions.payload';

const styles = () => ({
	root: {},
	list: {
		width: 'auto',
		display: 'flex',
		paddingBottom: '10px',
		marginBottom: '10px',
		flexDirection: 'column',
		borderBottom: '2px solid #eee',
	},
	item: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between'
	},
	title: {
		fontSize: '20px',
	},
});

class TodoListItem extends Component {
	render() {
		const { t, classes, delet_item } = this.props;
		const { list } = this.props.todos;
		return (
			<ul className={classes.root}>
				{list.length !== 0 && list.map(item => {
					return (
						<li className={classes.list} key={item.id}>
							<div className={classes.item}>
								<div className={classes.title} >{item.title}</div>
								<TodoDelButton
									label={t('buttons.delete')}
									clickHandler={delet_item(item.id)}
								/>
							</div>
						</li>
					);
				})}
			</ul>
		);
	}
}

TodoListItem.defaultProps = {
	classes: {}
};

TodoListItem.propTypes = {
	classes: PropTypes.object,
	list: PropTypes.array,
};


const mapStateToProps = state => ({
	todos: state.todos,
});

const mapDispatchToProps = dispatch => ({ 

	delet_item: (id) => () => {
		dispatch(deletItem(id))
	}
});

export default connect(mapStateToProps, mapDispatchToProps) (withTranslation()(withStyles(styles, { withTheme: true })(TodoListItem)));
