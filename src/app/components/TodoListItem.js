import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { 
	deletItem, 
	changeItem,
	getData,
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
		paddingLeft: '10px',
		fontSize: '20px',
	},
	selectedUser: {
		borderLeft: '2px solid red',
		marginLeft: '-2px'
	}
});

class TodoListItem extends Component {


	componentDidMount() {
		this.props.getData()
	};

	render() {
		const { t, classes, deletItem, changeItem, list, selected  } = this.props;
			// console.log('selected',selected.item)
			
		return (
			<ul className={classes.root} >
				{list.length !== 0 && list.map(item => {
					console.log('item.id',item.id)
					console.log('selected',selected.id)
					const select = selected.item === item.id ? classes.selectedUser : '';
					return (
						<li 
							className={classNames(classes.list, select)} 
							// className={classNames(classes.list)} 
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
	selectedUser: {},
	deletItem: () => {
	},
	changeItem: () => {
	},
	
};

TodoListItem.propTypes = {
	classes: PropTypes.object,
	list: PropTypes.array,
	// selected: PropTypes.string,
	clickHandler: PropTypes.func,
	t: PropTypes.func,
	deletItem: PropTypes.func,
	changeItem: PropTypes.func,
};

const mapStateToProps = state => ({
	...state.items,
});

const mapDispatchToProps = dispatch => ({

	deletItem: (id) => () => {
		dispatch(deletItem(id))
	},

	changeItem: (id) => () => {
		dispatch(changeItem(id))
	},
	getData: ()  => {
		dispatch(getData())
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(withStyles(styles, { withTheme: true })(TodoListItem)));
