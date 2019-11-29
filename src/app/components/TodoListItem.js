import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { 
	deletItem, 
	changeItem 
} from 'store/action';
import { TodoDelButton } from '@todo';

const styles = () => ({
	root: {
		listStyle: 'none',
		paddingLeft: '10px'
	},
	list: {
		width: '100%',
		display: 'flex',
		paddingBottom: '10px',
		marginBottom: '10px',
		flexDirection: 'column',
		borderBottom: '2px solid #eee',
	},
	item: {
		display: 'flex',
		alignItems: 'flex-end',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: '20px',
	},
	selected: {
		borderLeft: '2px solid red',
		// paddingLeft: '10px',
		marginLeft: '-1px'
	}
});

class TodoListItem extends Component {
	render() {
		const { t, classes, deletItem, changeItem, list, selectedItem  } = this.props;
			console.log(list)
		return (
			<ul className={classes.root} >
				{list.length !== 0 && list.map(item => {
					const select = selectedItem === item.id ? classes.selected : "";
					return (
						<li 
							className={classNames(classes.list, select)} 
							className={classNames(classes.list)} 
							key={item.id} 
							onClick={changeItem(item.id)}
						>
								<div className={classes.item}>
									<div className={classes.title} >{item.content}</div>
									<TodoDelButton
										label={t('buttons.delete')}
										clickHandler={deletItem(item.id)}
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
	classes: {},
	list: [],
	selected: {},
	deletItem: () => {
	},
	changeItem: () => {
	},
	
};

TodoListItem.propTypes = {
	classes: PropTypes.object,
	list: PropTypes.array,
	selectedItem: PropTypes.string,
	clickHandler: PropTypes.func,
	t: PropTypes.func,
	deletItem: PropTypes.func,
	changeItem: PropTypes.func,
};

const mapStateToProps = state => ({
	...state.todos,
});

const mapDispatchToProps = dispatch => ({

	deletItem: (id) => () => {
		dispatch(deletItem(id))
	},

	changeItem: (id) => () => {
		dispatch(changeItem(id))
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoListItem)));
